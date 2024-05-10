function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Handwritten Dataset Creator')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


function saveImage(imageData, classValue, lineThickness, pixelRange, borderFading) {
  try {
    // Decode base64 image data
    var data = imageData.split(',')[1];
    var decodedData = Utilities.base64Decode(data);

    // Create blob from decoded data
    var blob = Utilities.newBlob(decodedData, 'image/png', classValue + '.png');

    // Save blob to Google Drive
    var folder = DriveApp.getFolderById('1aH6EyaSR43_L0uZxY0YU1RWItl2jE1iE'); // Replace with your folder ID
    var file = folder.createFile(blob);

    // Log file URL
    Logger.log('File URL: ' + file.getUrl());
  } catch (error) {
    Logger.log('Error: ' + error.toString());
  }
}
