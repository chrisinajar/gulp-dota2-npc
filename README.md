# Gulp Dota 2 NPC Custom File Generator
Compile individual .txt files into npc custom files.

# Installation
`npm i --save-dev gulp-dota2-npc`

## Usage
```js
var gulp = require('gulp');
var dotaNPC = require('gulp-dota2-npc');

gulp.task('abilities', function () {
	return gulp.src('./npc/abilities/**/*.txt')
		.pipe(dotaNPC('abilities'))
		.pipe(gulp.dest('./npc'));
});
```

# License
MIT
