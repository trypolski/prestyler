const glob = require('glob');
const path = require('path')
const constants = require('./constants');

const defaultEntries = {
  [constants.HOME_PAGE_NAME]: [path.resolve(__dirname, '../src/pages/index.js'), path.resolve(__dirname, '../src/pages/index.scss')],
  [constants.PUBLIC_FILE_NAME]: [path.resolve(__dirname, '../src/scripts/index.js'), path.resolve(__dirname, '../src/styles/index.scss')],
  [constants.PRESTYLER_NAME]: [path.resolve(__dirname, '../scss/prestyler.scss')]
}

exports.getEntries = function() {
  return glob
    .sync(`${constants.PAGES_FOLDER_PATH}**/main.js`)
    .reduce((entriesObj, filePath) => {
      console.log(entriesObj, filePath)
      const pageFolderName = filePath.match(constants.CUSTOM_REGEX);
      const entryName = pageFolderName[1];
      entriesObj[entryName] = [
        filePath,
        filePath.replace('main.js', 'style.scss')
      ];
      return entriesObj;
    }, defaultEntries);
}

exports.getOutputFilenameJS = function(pathData) {
  switch(pathData.chunk.name) {
    case constants.HOME_PAGE_NAME:
      return 'index.js';
    case constants.PUBLIC_FILE_NAME:
      return 'public/js/scripts.js';
    case constants.PRESTYLER_NAME:
      return 'public/prestyler/prestyler.js';
    default:
      return '[name]/index.js';
  }
}

exports.getOutputFilenameCSS = function(pathData) {
  switch(pathData.chunk.name) {
    case constants.HOME_PAGE_NAME:
      return 'index.css';
    case constants.PUBLIC_FILE_NAME:
      return 'public/css/styles.css';
    case constants.PRESTYLER_NAME:
      return 'public/prestyler/prestyler.css';
    default:
      return '[name]/index.css';
  }
}
