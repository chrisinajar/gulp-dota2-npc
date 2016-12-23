# Gulp Dota 2 Spellbook
Compile data driven ability data in the Dota 2 Spellbook format into a proper `npm_abilities_custom.txt`

# Installation
`npm i --save-dev gulp-dota2-spellbook`

## Usage
```js
var gulp = require('gulp');
var spellbook = require('gulp-dota2-spellbook');

gulp.task('abilities', function () {
	return spellbook('./npc/abilities/**/*.txt')
		.pipe(gulp.dest('./npc'));
});
```

# License
MIT
