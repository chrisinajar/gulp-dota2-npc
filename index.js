var gulp = require('gulp');
var concat = require('gulp-concat');
var transform = require('gulp-transform');
var path = require('path');

module.exports = GulpSpellbook;

// Usage
// spellbook('./npc/abilities/**/*.txt')
//    .pipe(gulp.dest('./npc/'))

function GulpSpellbook (files) {
  files = files || './npc/abilities/**/*.txt';
  return gulp.src(files)
    .pipe(transform(function (contents, file) {
      // get the string contents of the file so we can easily update it
      var strContent = String(contents);
      var splitPath = file.relative.split(path.sep);
      var needsRename = splitPath.length > 1;
      var abilityName = stripDotTxt(splitPath.join('_'));

      if (needsRename) {
        strContent = strContent.replace('"' + stripDotTxt(splitPath[1]) + '"', '"' + abilityName + '"');
      }
      console.log('Adding ability', abilityName);
      return strContent;
    }))
    .pipe(concat('npc_abilities_custom.txt'));
}

function stripDotTxt (str) {
  return str.substr(0, str.length - 4);
}
