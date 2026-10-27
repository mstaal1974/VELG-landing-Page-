/**
 * Run createTradeShowEnquiryForm once at https://script.google.com/.
 * This creates a Google Form and linked response spreadsheet in your account.
 * Re-running reuses the same form; do not delete Script Properties to retry.
 * Review sharing/publishing settings and submit a test before distributing.
 */
function createTradeShowEnquiryForm() {
  var properties = PropertiesService.getScriptProperties();
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var formId = properties.getProperty('BLOCKSURE_ENQUIRY_FORM_ID');
    var form;
    if (formId) {
      form = FormApp.openById(formId);
      if (properties.getProperty('BLOCKSURE_ENQUIRY_CONFIGURED') !== 'true') {
        throw new Error('A previous setup stopped partway through. Open the existing form from its ID in Script Properties and review it before retrying; do not create duplicate forms.');
      }
      logLinks(form, properties.getProperty('BLOCKSURE_ENQUIRY_SHEET_ID'));
      return;
    }

    form = FormApp.create('Connect with Blocksure');
    properties.setProperty('BLOCKSURE_ENQUIRY_FORM_ID', form.getId());
    form.setDescription('Discover what is possible across our ecosystem. Tell us what caught your interest and our team will be in touch.');
    form.setConfirmationMessage('Thanks for connecting. Your enquiry has been received. We look forward to speaking with you.');
    form.setLimitOneResponsePerUser(false);
    form.setShowLinkToRespondAgain(false);
    form.setPublishingSummary(false);
    form.setProgressBar(false);

    form.addTextItem().setTitle('Name').setRequired(true);
    form.addTextItem().setTitle('Email').setRequired(true).setValidation(
      FormApp.createTextValidation().requireTextIsEmail().setHelpText('Please enter a valid email address.').build()
    );
    form.addTextItem().setTitle('Organisation').setRequired(false);
    var platforms = [
      'Blocksure', 'Blocksure Platform', 'Microcredentials', 'Learning Hub',
      'SimuLab', 'Open Skills Management', 'Skills Repository', 'Digital Badges', 'Skills Atlas'
    ];
    form.addCheckboxItem().setTitle('Which platforms interest you?').setChoiceValues(platforms).setRequired(false);
    form.addParagraphTextItem().setTitle('How can we help?').setRequired(false);
    form.addCheckboxItem().setTitle('Permission to contact you').setChoiceValues([
      'I agree to be contacted about this enquiry.'
    ]).setRequired(true);

    var sheet = SpreadsheetApp.create('Blocksure — Trade show enquiries');
    properties.setProperty('BLOCKSURE_ENQUIRY_SHEET_ID', sheet.getId());
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
    properties.setProperty('BLOCKSURE_ENQUIRY_CONFIGURED', 'true');

    // New Forms use explicit publishing; older accounts may not expose it.
    if (typeof form.supportsAdvancedResponderPermissions === 'function' && form.supportsAdvancedResponderPermissions()) {
      form.setPublished(true);
    }
    form.setAcceptingResponses(true);
    logLinks(form, sheet.getId());
  } finally {
    lock.releaseLock();
  }
}

function logLinks(form, sheetId) {
  Logger.log('PUBLIC FORM URL (send this URL back for the QR code): ' + form.getPublishedUrl());
  Logger.log('EDIT FORM (keep for your team): ' + form.getEditUrl());
  if (sheetId) Logger.log('RESPONSE SHEET (keep private): https://docs.google.com/spreadsheets/d/' + sheetId + '/edit');
  Logger.log('Before sharing: open the PUBLIC form in an incognito/private window and confirm it does not require a Google sign-in. Review responder access in the form publishing settings if necessary. Submit a test and verify a new row appears in the linked response sheet.');
}
