const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('js', function() {
    return browserify('./src/index.js')
	.transform('babelify')
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('build'));
})

gulp.watch(['src/**/*.js','test/**/*.js'], ['js']);

gulp.task('default',['js']);
