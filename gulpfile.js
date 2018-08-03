const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const browserify = require("browserify");
const babelify = require("babelify");
const streamify = require("gulp-streamify");
const source = require("vinyl-source-stream");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

let jsWatch = "./website-assets/js/index.js";
let sassWatch = "website-assets/scss/styles.scss";

// Fix stop watch on error
function skipError(err){
	console.log(err.toString());
	this.emit("end");
}

// Compile SCSS into CSS
gulp.task("sass", function(){
	return gulp.src(sassWatch)
		.pipe(sass()) // Converts SCSS to CSS
		.on("error", skipError)
		.pipe(autoprefixer({
			browsers: ["last 2 versions"],
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: "ie8"}))
		.pipe(gulp.dest("website-assets/css"))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task("js", function(){
	return browserify(jsWatch)
		.transform(babelify, { presets: ["env"] })
		.bundle()
		.pipe(source(jsWatch))
		.pipe(streamify(uglify()))
		.pipe(rename("client.min.js"))
		.pipe(gulp.dest("./website-assets"));
});

gulp.task("watch", ["browserSync", "sass", "js"], ()=>{
	gulp.watch("website-assets/scss/**/*.scss", ["sass"]);
	gulp.watch("website-assets/js/**/*.js", ["js"]);
	gulp.watch("website-assets/client.min.js", browserSync.reload);
	gulp.watch("./index.html", browserSync.reload);
	gulp.watch("website-assets/js/**/*.js", browserSync.reload);
});


gulp.task("browserSync", function(){
	browserSync.init({
		server: {
			baseDir: "."
		}
	})
});
