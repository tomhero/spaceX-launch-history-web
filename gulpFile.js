const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream())
})

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: "./app"
    })

    gulp.watch("app/scss/*.scss", ['sass'])
    gulp.watch("app/*.html").on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
