# Live enquiry form: Google Forms + Google Sheets

This is the recommended shared response store for the trade show. The form is hosted by Google and works on phones; every submission is recorded in its linked spreadsheet. Colab is not needed.

## One-time setup in your Google account

1. Open https://script.google.com/ and create a **New project**.
2. Replace the starter code with the contents of `create-enquiry-form.gs` in this folder.
3. Select **createTradeShowEnquiryForm** and click **Run**. Review and authorise the requested Google Forms and Sheets access for this script in your own account.
4. In the **Execution log**, copy the **PUBLIC FORM URL**. Keep the edit link and response spreadsheet private.
5. Open the public form in an incognito/private window. If your account restricts responses to your organisation, adjust responder access in the form's publish/settings controls. Check that no Google sign-in is needed for visitors.
6. Submit a test and confirm a new row appears in the response spreadsheet.
7. Send the full public form URL back to connect the built-in enquiry panel and QR code. The live Google Form will appear inside the landing page panel and store submissions in its linked Sheet. A QR can link directly to Google Forms without requiring GitHub Pages; linking to the landing page panel instead requires a public website URL ending in `#connect`.

The script creates name, email, organisation, platform interests, message and contact-permission fields. Share the spreadsheet only with staff who need access. Rerunning a successful setup logs the existing links instead of creating duplicates. If setup stops midway, review the existing form before retrying; the script deliberately preserves partially created resources.

`index.html` now includes an enquiry panel accessed using the “Let’s connect” button. Until `GOOGLE_FORM_URL` is configured, it shows a disabled draft. Once configured, the panel embeds the hosted Google Form. `enquiry.html` remains a standalone draft custom form and does not submit anywhere without a backend; it is not used for Google Forms submissions.

The Google-side script must be run and authorised by the Google account owner. It has not been executed against a live Google account from this environment.
