var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var connect = require('gulp-connect');





gulp.task('less',function(){
	return gulp.src('src/less/main.less')
	.pipe(less())
	.pipe(cssmin({
            advanced: false,
            compatibility: 'ie7',
            keepBreaks: true,
            keepSpecialComments: '*'
        }))
	.pipe(gulp.dest('dist/css'));
})
gulp.task('concat',function(){
	return gulp.src('src/js/*.js')
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});
gulp.task('png', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images'));
});
// gulp.watch('src',['compile-less','concat','png']);

gulp.task('default',['less','concat','png'], function(){
	console.log('ltt');
	return gulp.watch(['src/js/*.js','src/less/main.less','src/images/*'],['less','concat','png']);
});
gulp.task('webserver', function() {
    connect.server({
    	root:'src',
        livereload: true,
        // open: 'external',
        host:'hello.com',
        port: 8080,
        debug:true,
        index:"test.html"
    });
});