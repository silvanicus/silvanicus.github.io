var gulp = require('gulp'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	sass = require('gulp-ruby-sass'),
	uglify = require('gulp-uglify');

gulp.task('scripts', function() {
	gulp.src('assets/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets'))
	.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('styles', function() {
    sass('assets/css/style.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('assets/styles.css'))
}
});

// Default task
gulp.task('default', function() {
	gulp.start('scripts', 'styles');
});