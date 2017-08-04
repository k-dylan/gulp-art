# gulp-art
A gulp plugin for [art-template](https://github.com/aui/art-template)

# Install
```
$ npm install gulp-art
```

$ Basic Usage
Template file: 
```html
<!-- dome.art  -->
<h1>{{title}}</h1>
```

Gulpfile
```js
var template  = require('gulp-art');
var gulp = require('gulp');

gulp.task('default', function () {
	gulp.src("demo.art")
		.pipe(template({
			data : {
				"title" : "gulp-art"
			}
		}))
		.pipe(gulp.dest('dist'));
});
```

Output: 
```html
<!-- dome.html  -->
<h1>gulp-art</h1>
```