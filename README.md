# Floating Contact Widget

A floating contact form that can be easily integrated into any webpage. The form sends data to a Google Sheet and sends a notification email.

## Features

- Floating "Help?" (currently in French, "Aide ?") button that opens a contact form when clicked
- Compliance with GDPR and Swiss nFADP for data protection
- Perfect for sales pages and checkout forms to provide instant support
- reCAPTCHA v2 validation
- Data sent to Google Sheet
- Email notification with reply-to configured
- Source page URL recording
- Responsive and modern design
- Compatible with any platform that allows custom code:
  - Ontraport
  - WordPress
  - Shopify
  - Wix
  - Webflow
  - Any website with HTML/CSS/JS support
  - Any application that allows custom code injection

## Project Files

- `widget.html` : The HTML/CSS/JS form to integrate into your pages
- `GoogleAppsScript.js` : The Google Apps Script to deploy, linked to the Google Sheet
- `GoogleSpreadSheetTemplate.csv` : The columns to create in your Google Sheet doc linked to the script
- `README.md` : Project documentation

## Installation

1. **Google Apps Script**
   - Create a Google Sheet and add the columns mentioned in the `GoogleSpreadSheetTemplate.csv` template
   - Inside the Google Sheet document, go to Extensions / Apps Script
   - Copy-paste the content of `GoogleAppsScript.js` and adjust the destination email
   - In the script editor, go to "Project Settings" > "Script Properties"
   - Add a new property named `RECAPTCHA_SECRET_KEY` with your reCAPTCHA-v2 secret key
   - Deploy the script as a web app
   - Copy the deployment URL

2. **HTML Form**
   - Copy the content of `widget.html`
   - Replace the URL in the form's `action` attribute with your Apps Script deployment URL
   - Configure your reCAPTCHA-v2 key (data-sitekey)
   - Integrate the code into your webpage

## Configuration

- Modify the recipient email address in the Google Apps Script
- Configure reCAPTCHA:
  - Get your site key and secret key from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin/create)
  - The site key (data-sitekey) is in the HTML
  - The secret key must be configured in the script properties (see Installation)
- Customize CSS styles according to your needs
- (Optional) Translate the texts

## Usage

The form appears as a floating "Aide ?" button in the bottom right corner of the page. Click it to display the contact form. This is particularly useful for:
- Sales pages where customers might have questions before purchasing
- Checkout forms where users might need assistance
- Any page where you want to provide instant support without leaving the current page

## Language Customization

The current version is in French, but it's easily adaptable to other languages. To change the language:
1. Update the button text "Aide ?"
2. Translate the form labels and placeholders
3. Translate the success/error messages
4. Update the email template in the Google Apps Script

## Security

- reCAPTCHA v2 validation
- CORS protection
- Client and server-side field validation
- Sensitive keys stored securely in script properties

## GDPR and Swiss nFADP Compliance

This tool is designed to comply with the General Data Protection Regulation (GDPR) and the Swiss New Federal Act on Data Protection (nFADP). By using this contact form widget, you avoid relying on third-party form management services that could compromise the privacy of your users' data.

No Third-Party Services: Data is sent directly to a Google Sheet that you control, without passing through external form management services.
Data Protection: Sensitive keys, such as those for reCAPTCHA, are securely stored in the Google Apps Script properties.
Full Control: You have complete control over the collected data and its processing, allowing you to ensure compliance with local and international regulations.

## Support

For any questions or assistance, please visit [Contact Page](https://cedricv.com/contact/) 