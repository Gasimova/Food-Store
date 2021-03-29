const {src, dest , watch, series, tree} = require('gulp');
const sass  = require('gulp-sass');
const uglify = require('gulp-uglify');
// const { pipeline } = require('node:stream');
// const { minify } = require('uglify-js');


// minify js file
function scssTask(){
    return src('./scss/**/*.scss', {sourcemaps:true})
    .pipe(sass())
    .pipe(dest('dist', {sourcemaps:'.'}))
}

//minify js code
function jsTask(){
    return src('./main.js', {sourcemaps:tree})
    .pipe(uglify())
    .pipe(dest('dist', {sourcemaps:'.'}))
}

//watch task
function watchTasks(){
    watch(['./scss/**/*.scss', './main.js'], series(scssTask, jsTask))
}

//default gulp tasks
exports.default = series(
    scssTask,
    jsTask,
    watchTasks
)