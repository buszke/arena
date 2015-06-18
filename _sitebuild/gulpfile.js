var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: ".build"
		},
		open: false
	});
});

gulp.task('sass', function(){
	gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('.build/css'))
	.pipe(reload({stream:true}));
});

gulp.task('html', function(){
	gulp.src('template/**/*.*')
	.pipe(gulp.dest('.build/'))
	.pipe(reload({stream:true}));
});

gulp.task('img', function(){
	gulp.src('img/**/*.*')
	.pipe(gulp.dest('.build/img'))
	.pipe(reload({stream:true}));
});

gulp.task('watch',function(){
	gulp.watch('scss/**/*.scss', ['sass'])
	gulp.watch('img/**/*.*', ['img']);
	gulp.watch('template/**/*.*', ['html']);
});

gulp.task('default', ['browser-sync','sass','html','img','watch']);