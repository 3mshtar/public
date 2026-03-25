/**
 * Google Apps Script Web App for Vi Mår Bra current campaign.
 *
 * Sheet layout (recommended):
 * A1: title        B1: Katrineholms moské
 * A2: location     B2: Katrineholm
 * A3: goal         B3: 1500000
 * A4: raised       B4: 0
 * A5: remaining    B5: 1500000
 * A6: progress     B6: 0
 * A7: updatedAt    B7: auto
 * A8: notes        B8: optional note
 * A9: imageUrl     B9: optional image URL
 *
 * Deploy:
 * 1) Extensions > Apps Script
 * 2) Paste this code in Code.gs
 * 3) Deploy > New deployment > Web app
 * 4) Execute as: Me
 * 5) Who has access: Anyone
 * 6) Copy the web app URL and paste it into:
 *    site/assets/js/data.js -> currentCampaignSheet.appsScriptUrl
 */
function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('CurrentCampaign') || ss.getSheets()[0];
  const values = sheet.getDataRange().getDisplayValues();
  const data = {};

  values.forEach(function(row) {
    const key = (row[0] || '').toString().trim();
    const value = (row[1] || '').toString().trim();
    if (!key) return;
    data[key] = value;
  });

  const goal = toNumber(data.goal || data.malsumman || data.amount || data.total);
  const raised = toNumber(data.raised || data.insamlat || data.collected);
  const remaining = toNumber(data.remaining || data.kvar || Math.max(goal - raised, 0));
  const progress = data.progress ? toNumber(data.progress) : (goal > 0 ? (raised / goal) * 100 : 0);

  const payload = {
    ok: true,
    data: {
      title: data.title || 'Katrineholms moské',
      location: data.location || 'Katrineholm',
      goal: goal,
      raised: raised,
      remaining: remaining,
      progress: progress,
      updatedAt: data.updatedAt || new Date().toISOString(),
      notes: data.notes || '',
      imageUrl: data.imageUrl || ''
    }
  };

  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function toNumber(value) {
  if (value === null || value === undefined || value === '') return 0;
  var cleaned = String(value).replace(/[^\d.,-]/g, '').replace(/,(?=\d{3}\b)/g, '').replace(',', '.');
  var num = Number(cleaned);
  return isNaN(num) ? 0 : num;
}
