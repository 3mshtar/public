/**
 * Google Apps Script Web App for Vi Mar Bra current campaign.
 *
 * This version is tolerant to different sheet layouts:
 * 1) key in column A, value in column B
 * 2) value in column A, label in column B
 * 3) Arabic, Swedish, or English labels
 * 4) optional header row tables
 *
 * Recommended simple layout (either order works):
 * title / Katrineholms moske
 * location / Katrineholm
 * goal / 1500000
 * raised / 10900
 * remaining / 1489100
 * progress / 0.7   or leave empty to auto-calculate
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('CurrentCampaign') || ss.getSheets()[0];
  var values = sheet.getDataRange().getDisplayValues();
  var extracted = extractCampaignData(values);

  var goal = firstNumber(extracted.goal, extracted.target, extracted.amount, extracted.total, extracted.malsumman);
  var raised = firstNumber(extracted.raised, extracted.collected, extracted.insamlat, extracted.sum);
  var remaining = firstNumber(extracted.remaining, extracted.kvar, Math.max(goal - raised, 0));
  var progress = extracted.progress !== '' && extracted.progress !== null && extracted.progress !== undefined
    ? toNumber(extracted.progress)
    : (goal > 0 ? (raised / goal) * 100 : 0);

  if (progress > 0 && progress <= 1) progress = progress * 100;
  if (!remaining && goal >= raised) remaining = Math.max(goal - raised, 0);

  var payload = {
    ok: true,
    data: {
      title: firstText(extracted.title, extracted.name, 'Katrineholms moske'),
      location: firstText(extracted.location, extracted.city, 'Katrineholm'),
      goal: goal,
      raised: raised,
      remaining: remaining,
      progress: progress,
      updatedAt: firstText(
        extracted.updatedAt,
        extracted.updated_at,
        Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss')
      ),
      notes: firstText(extracted.notes, extracted.note, ''),
      imageUrl: firstText(extracted.imageUrl, extracted.image, '')
    },
    debug: {
      extractedKeys: Object.keys(extracted),
      rowCount: values.length
    }
  };

  var callback = e && e.parameter && e.parameter.callback;
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + JSON.stringify(payload) + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function extractCampaignData(values) {
  var out = {};
  if (!values || !values.length) return out;

  for (var i = 0; i < values.length; i++) {
    var row = values[i] || [];
    var a = cleanCell(row[0]);
    var b = cleanCell(row[1]);
    if (!a && !b) continue;

    var keyA = canonicalKey(a);
    var keyB = canonicalKey(b);

    if (keyA && !out[keyA]) {
      out[keyA] = b;
      continue;
    }
    if (keyB && !out[keyB]) {
      out[keyB] = a;
      continue;
    }

    // Header row format support: title, location, goal, raised, remaining...
    if (i === 0 && row.length >= 2) {
      var headers = row.map(function(cell) { return canonicalKey(cell); });
      var hasKnownHeader = headers.some(function(h) { return !!h; });
      if (hasKnownHeader && values[i + 1]) {
        var dataRow = values[i + 1];
        for (var c = 0; c < headers.length; c++) {
          if (headers[c]) out[headers[c]] = cleanCell(dataRow[c]);
        }
        break;
      }
    }
  }

  return out;
}

function canonicalKey(value) {
  var raw = cleanCell(value).toLowerCase();
  if (!raw) return '';
  raw = raw.replace(/[‏‎]/g, '').trim();

  var aliases = {
    title: ['title', 'name', 'campaign', 'campaign name', 'اسم الحملة', 'اسم المشروع', 'العنوان'],
    location: ['location', 'city', 'place', 'المدينة', 'الموقع', 'مكان', 'موقع الحملة'],
    goal: ['goal', 'target', 'amount', 'total', 'malsumman', 'mal', 'المبلغ المطلوب', 'المبلغ الكامل', 'الهدف', 'الهدف الاجمالي', 'الهدف الإجمالي'],
    raised: ['raised', 'collected', 'insamlat', 'sum', 'المبلغ المجموع', 'المبلغ المحصل', 'المجموع', 'تم جمع'],
    remaining: ['remaining', 'kvar', 'left', 'المتبقي', 'المبلغ المتبقي', 'الباقي'],
    progress: ['progress', 'percentage', 'percent', 'النسبة', 'نسبة', 'التقدم'],
    updatedAt: ['updatedat', 'updated_at', 'last updated', 'آخر تحديث', 'اخر تحديث', 'تحديث'],
    notes: ['notes', 'note', 'ملاحظات', 'ملاحظة'],
    imageUrl: ['imageurl', 'image', 'img', 'photo', 'صورة', 'رابط الصورة']
  };

  for (var key in aliases) {
    for (var i = 0; i < aliases[key].length; i++) {
      if (raw === aliases[key][i]) return key;
    }
  }
  return '';
}

function cleanCell(value) {
  return (value === null || value === undefined) ? '' : String(value).trim();
}

function firstText() {
  for (var i = 0; i < arguments.length; i++) {
    var v = arguments[i];
    if (v !== null && v !== undefined && String(v).trim() !== '') return String(v).trim();
  }
  return '';
}

function firstNumber() {
  for (var i = 0; i < arguments.length; i++) {
    var v = arguments[i];
    if (v !== null && v !== undefined && String(v).trim() !== '') return toNumber(v);
  }
  return 0;
}

function toNumber(value) {
  if (value === null || value === undefined || value === '') return 0;
  if (typeof value === 'number') return isNaN(value) ? 0 : value;

  var text = String(value).trim();
  text = text.replace(/\s+/g, '');
  text = text.replace(/[^\d,.-]/g, '');

  var hasComma = text.indexOf(',') !== -1;
  var hasDot = text.indexOf('.') !== -1;

  if (hasComma && hasDot) {
    if (text.lastIndexOf(',') > text.lastIndexOf('.')) {
      text = text.replace(/\./g, '').replace(',', '.');
    } else {
      text = text.replace(/,/g, '');
    }
  } else if (hasComma) {
    if (/^\d{1,3}(,\d{3})+$/.test(text)) {
      text = text.replace(/,/g, '');
    } else {
      text = text.replace(',', '.');
    }
  }

  var num = Number(text);
  return isNaN(num) ? 0 : num;
}
