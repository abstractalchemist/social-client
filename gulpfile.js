const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const connect = require('gulp-connect');
const mocha = require('gulp-mocha');


gulp.task('test', function() {
    return gulp.src('./test/**/*.js').pipe(mocha({require:'test/setup.js', compilers: ['js:babel-register']}));
})

gulp.task('js', ['test'], function() {
    return browserify('./src/index.js', { debug: true })
	.transform('babelify')
	.bundle()
    	.on('error', function(err) {
	    console.log(err);
	    return this.emit('end');
	})
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('build'));
})

gulp.task('connect', function() {
    return connect.server({ root : 'build', livereload : true });
})

gulp.task('cp', function() {
    return gulp.src('public/index.html').pipe(gulp.dest('build'));
})

const w = gulp.watch(['src/**/*.js','test/**/*.js'], ['js','cp']);
w.on('error', function(err) {
    console.log(err);
})

gulp.task('default',['js', 'cp']);
