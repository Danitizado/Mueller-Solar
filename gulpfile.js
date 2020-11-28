
"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass"); //Necessário para funcionar gulp-sass


function compilaSass() {
  return gulp
    .src("docs/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)) // Converte Sass para CSS mimificado com gulp-sass
    .pipe(gulp.dest("docs/css"));
}

function watch() {
  gulp.watch("docs/scss/**/*.scss", compilaSass);
}

gulp.task('default', watch, compilaSass);