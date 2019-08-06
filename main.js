var BASE_FOLDER_ID = PropertiesService.getScriptProperties().getProperty('FOLDER_ID');
var NEW_OWNER = PropertiesService.getScriptProperties().getProperty('NEW_OWNER');
var me = Session.getActiveUser().getEmail();

function main() {
  var folder = DriveApp.getFolderById(BASE_FOLDER_ID);
  chownWithFolder(folder);
}

function chownWithFolder(folder) {
  chownIfNeeded(folder);

  var files = folder.searchFiles('"me" in owners');
  while (files.hasNext()) {
    var file = files.next();
    console.log('file: ', file.getName());
    chownIfNeeded(file);
  }

  var folders = folder.getFolders();
  while (folders.hasNext()) {
    var folder = folders.next();
    console.log('folder: ', folder.getName());
    chownWithFolder(folder);
  }
}

function chownIfNeeded(fileOrFolder) {
  if (fileOrFolder.getOwner().getEmail() === me) {
    fileOrFolder.setOwner(NEW_OWNER);
  }
}
