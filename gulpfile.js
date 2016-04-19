var gulp 	= require('gulp');
var sass 	= require('gulp-sass');
var rename 	= require('gulp-rename');

gulp.task('sass', function() {
	return gulp.src('./app/ressources/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./app/ressources/**/*.scss', ['sass']);
});