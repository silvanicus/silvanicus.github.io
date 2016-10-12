var gulp = require('gulp'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	sass = require('gulp-ruby-sass'),
	uglify = require('gulp-uglify'),
	livereload = require('gulp-livereload');

gulp.task('scripts', function() {
	gulp.src('assets/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets'))
	.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('styles', function() {
    sass('assets/sass/style.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('assets'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// Default task
gulp.task('default', function() {
	gulp.start('scripts', 'styles');
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('assets/js/*.js', ['scripts']);
	gulp.watch('assets/sass/*.scss', ['styles']);
});