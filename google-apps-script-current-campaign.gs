/**
 * Google Apps Script Web App for Vi Mår Bra current campaign.
 *
 * Supports both layouts:
 * 1) key in column A and value in column B
 * 2) value in column A and key in column B
 */
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('CurrentCampaign') || ss.getSheets()[0];
  const values = sheet.getDataRange().getDisplayValues();
  const data = readPairs(values);

  const goal = pickNumber(data, ['goal', 'target', 'amount', 'total', 'full', 'fullamount', 'malsumman', 'mål', 'المبلغ المطلوب', 'المبلغ الكامل', 'الهدف', 'الهدف الاجمالي']);
  let raised = pickNumber(data, ['raised', 'collected', 'insamlat', 'المبلغ المحصل', 'المبلغ المجموع', 'المبلغ المجمع', 'المحصل', 'المجموع']);
  let remaining = pickNumber(data, ['remaining', 'kvar', 'left', 'المبلغ المتبقي', 'المتبقي', 'الباقي']);

  if (!isFiniteNumber(raised) && isFiniteNumber(goal) && isFiniteNumber(remaining)) {
    raised = Math.max(goal - remaining, 0);
  }
  if (!isFiniteNumber(remaining) && isFiniteNumber(goal) && isFiniteNumber(raised)) {
    remaining = Math.max(goal - raised, 0);
  }

  const progress = isFiniteNumber(goal) && goal > 0 && isFiniteNumber(raised)
    ? (raised / goal) * 100
    : 0;

  const payload = {
    ok: true,
    data: {
      title: pickText(data, ['title', 'name', 'campaign'], 'Katrineholms moské'),
      location: pickText(data, ['location', 'city'], 'Katrineholm'),
      goal: isFiniteNumber(goal) ? goal : 0,
      raised: isFiniteNumber(raised) ? raised : 0,
      remaining: isFiniteNumber(remaining) ? remaining : 0,
      progress: progress,
      updatedAt: pickText(data, ['updatedat', 'updated_at', 'lastupdated', 'آخر تحديث'], new Date().toISOString()),
      notes: pickText(data, ['notes', 'note', 'ملاحظات'], ''),
      imageUrl: pickText(data, ['imageurl', 'image'], '')
    }
  };

  const callback = e && e.parameter && e.parameter.callback;
  if (callback) {
    return ContentService
      .createTextOutput(callback + '(' + JSON.stringify(payload) + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function readPairs(values) {
  const data = {};
  values.forEach(function(row) {
    const a = (row[0] || '').toString().trim();
    const b = (row[1] || '').toString().trim();
    if (!a && !b) return;

    const aNum = toNumber(a, NaN);
    const bNum = toNumber(b, NaN);

    if (!isFiniteNumber(aNum) && b) {
      data[normalizeKey(a)] = b;
    }
    if (!isFiniteNumber(bNum) && a) {
      data[normalizeKey(b)] = a;
    }
  });
  return data;
}

function normalizeKey(key) {
  return String(key || '')
    .trim()
    .toLowerCase()
    .replace(/[ً-ٰٟ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function pickText(data, keys, fallback) {
  for (var i = 0; i < keys.length; i++) {
    var k = normalizeKey(keys[i]);
    if (data[k] !== undefined && data[k] !== null && String(data[k]).trim() !== '') return String(data[k]).trim();
  }
  return fallback;
}

function pickNumber(data, keys) {
  for (var i = 0; i < keys.length; i++) {
    var k = normalizeKey(keys[i]);
    if (data[k] !== undefined && data[k] !== null && String(data[k]).trim() !== '') {
      var n = toNumber(data[k], NaN);
      if (isFiniteNumber(n)) return n;
    }
  }
  return NaN;
}

function isFiniteNumber(value) {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

function toNumber(value, fallback) {
  if (value === null || value === undefined || value === '') return fallback;
  if (typeof value === 'number') return isFiniteNumber(value) ? value : fallback;

  var s = String(value).trim();
  if (!s) return fallback;

  s = s.replace(/[٠-٩]/g, function(d) { return String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)); });
  s = s.replace(/[۰-۹]/g, function(d) { return String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)); });
  s = s.replace(/[^0-9,.-]/g, '');
  if (!s) return fallback;

  var hasComma = s.indexOf(',') !== -1;
  var hasDot = s.indexOf('.') !== -1;

  if (hasComma && hasDot) {
    if (s.lastIndexOf(',') > s.lastIndexOf('.')) {
      s = s.replace(/\./g, '').replace(',', '.');
    } else {
      s = s.replace(/,/g, '');
    }
  } else if (hasComma) {
    var commaParts = s.split(',');
    if (commaParts.length > 2 || (commaParts.length === 2 && commaParts[1].length === 3)) {
      s = commaParts.join('');
    } else {
      s = s.replace(',', '.');
    }
  } else if (hasDot) {
    var dotParts = s.split('.');
    if (dotParts.length > 2 || (dotParts.length === 2 && dotParts[1].length === 3)) {
      s = dotParts.join('');
    }
  }

  var n = Number(s);
  return isFiniteNumber(n) ? n : fallback;
}
