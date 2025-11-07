import gulp from "gulp";
import shell from "gulp-shell";
import mocha from "gulp-mocha";

gulp.task("parcel", shell.task("npx parcel index.html"));

gulp.task("test", () => {
  return gulp.src("test/**/*.js", { read: false })
    .pipe(mocha({ reporter: "spec" }));
});

gulp.task("default", gulp.series("parcel"));
