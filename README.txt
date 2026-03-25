Vi Mår Bra - one.com upload notes

1) Upload everything inside this folder to the root of your domain on one.com.
2) Keep the folder structure exactly as it is.
3) Clean URLs are ready, so pages open like /about/ and /campaigns/ without .html.
4) If one.com uses Apache (usual case), the included .htaccess will also redirect old .html links to clean links.
5) The current campaign is already connected to the published Google Sheet CSV through assets/js/data.js.
6) Contact form is configured with FormSubmit to send to Info@vimarbra.se.
   After first test submit, activate the email sent by FormSubmit once.
7) Main pages:
   /            Home
   /campaigns/  Previous campaigns
   /current/    Current campaign
   /membership/ Membership
   /about/      About
   /contact/    Contact


Important v4 fix: all internal asset and page paths are now relative, so the site works correctly on one.com and also when you preview files inside a folder.


GOOGLE APPS SCRIPT
------------------
A ready script file is included at the site root:
  google-apps-script-current-campaign.gs

Paste it into Apps Script, deploy as a Web App, then copy the URL into:
  assets/js/data.js
field:
  currentCampaignSheet.appsScriptUrl

The current campaign is configured for Katrineholms moské with a goal of 1,500,000 KR.
