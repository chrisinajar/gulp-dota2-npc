var gulp = require('gulp');
var concat = require('gulp-concat');
var transform = require('gulp-transform');
var path = require('path');
var through = require('through2');
var multipipe = require('multipipe');

module.exports = GulpDotaNpc;

// Usage
// spellbook('./npc/abilities/**/*.txt')
//    .pipe(gulp.dest('./npc/'))

function GulpDotaNpc (type) {
  var file = 'npc_' + type + '_custom.txt';
  var headerName = 'DOTA' + type[0].toUpperCase() + type.substr(1);

  function transformFiles (contents, file) {
    // get the string contents of the file so we can easily update it
    var strContent = String(contents);
    var splitPath = file.relative.split(path.sep);
    var needsRename = splitPath.length > 1;
    var abilityName = stripDotTxt(splitPath.join('_'));

    if (needsRename) {
      strContent = strContent.replace('"' + stripDotTxt(splitPath[1]) + '"', '"' + abilityName + '"');
    }
    console.log('Adding', type, abilityName);
    return strContent;
  }

  function addHeader (contents, file) {
    return [
    '"', headerName, '"\n{\n',
    contents,
    '\n\n}'
    ].join('');
  }

  return multipipe(transform(transformFiles), concat(file), transform(addHeader));
}

function stripDotTxt (str) {
  return str.substr(0, str.length - 4);
}
