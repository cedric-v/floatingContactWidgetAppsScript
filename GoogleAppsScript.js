function doPost(e) {
  // Récupérer la clé secrète depuis les propriétés du script
  const secretKey = PropertiesService.getScriptProperties().getProperty('RECAPTCHA_SECRET_KEY');

  const recaptchaResponse = e.parameter['g-recaptcha-response'];

  // Vérification reCAPTCHA
  const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';
  const response = UrlFetchApp.fetch(verificationUrl, {
    method: 'post',
    payload: {
      secret: secretKey,
      response: recaptchaResponse
    }
  });

  const result = JSON.parse(response.getContentText());
  if (!result.success) {
    return createCorsResponse("Échec de la vérification reCAPTCHA.");
  }

  Logger.log(result);

  // Enregistrement dans Google Sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Feuille 1");
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.message,
    data.subject,
    data.pageUrl
  ]);

  // Envoi email
  const sujetMail = data.subject;
  const corpsMail = "Prénom : " + data.name + 
                   "\nEmail : " + data.email + 
                   "\nPage : " + data.pageUrl + 
                   "\n\nMessage :\n" + data.message;

  MailApp.sendEmail({
    to: "youremail@gmail.com",
    subject: sujetMail,
    body: corpsMail,
    replyTo: data.email
  });

  //MailApp.sendEmail("cedric@cedricv.com", "Debug reCAPTCHA", JSON.stringify(result));

  Logger.log(e.parameter);

  return createCorsResponse("Merci ! Votre message a été envoyé.");
}

// Fonction pour gérer les réponses avec CORS
function createCorsResponse(message) {
  const jsonResponse = JSON.stringify({ message: message });
  return ContentService.createTextOutput(jsonResponse)
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

// Fonction de test
function testDoPost() {
  const e = {
    parameter: {
      'g-recaptcha-response': 'test-response',
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.'
    }
  };

  const response = doPost(e);
  Logger.log(response.getContent()); // Affiche la réponse dans les journaux
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}