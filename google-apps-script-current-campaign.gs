/**
 * Google Apps Script Web App for Vi Mar Bra current campaign.
 *
 * Suggested sheet layout in a tab named CurrentCampaign:
 * A1: title        B1: Katrineholms moske
 * A2: location     B2: Katrineholm
 * A3: goal         B3: 1500000
 * A4: raised       B4: 0
 * A5: remaining    B5: 1500000   (optional)
 * A6: progress     B6: 0         (optional)
 * A7: updatedAt    B7: auto      (optional)
 * A8: notes        B8: optional note
 * A9: imageUrl     B9: optional image URL
 *
 * Deploy:
 * 1) Extensions > Apps Script
 * 2) Paste this code into Code.gs
 * 3) Deploy > New deployment > Web app
 * 4) Execute as: Me
 * 5) Who has access: Anyone
 * 6) Keep the same web app URL in assets/js/data.js
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('CurrentCampaign') || ss.getSheets()[0];
  var values = sheet.getDataRange().getDisplayValues();
  var data = {};

  values.forEach(function(row) {
    var key = (row[0] || '').toString().trim();
    var value = (row[1] || '').toString().trim();
    if (!key) return;
    data[key] = value;
  });

  var goal = toNumber(data.goal || data.malsumman || data.amount || data.total);
  var raised = toNumber(data.raised || data.insamlat || data.collected);
  var remaining = data.remaining ? toNumber(data.remaining) : Math.max(goal - raised, 0);
  var progress = data.progress ? toNumber(data.progress) : (goal > 0 ? (raised / goal) * 100 : 0);

  var payload = {
    ok: true,
    data: {
      title: data.title || 'Katrineholms moske',
      location: data.location || 'Katrineholm',
      goal: goal,
      raised: raised,
      remaining: remaining,
      progress: progress,
      updatedAt: data.updatedAt || Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss'),
      notes: data.notes || '',
      imageUrl: data.imageUrl || ''
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

function toNumber(value) {
  if (value === null || value === undefined || value === '') return 0;
  var cleaned = String(value)
    .replace(/\s+/g, '')
    .replace(/[^\d,.-]/g, '')
    .replace(/,(?=\d{3}(\D|$))/g, '')
    .replace(',', '.');
  var num = Number(cleaned);
  return isNaN(num) ? 0 : num;
}
