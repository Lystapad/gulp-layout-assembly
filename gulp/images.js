// Images
const modules = require("./modules");
const globalSet = require("./config");
const webp = require("gulp-webp");
const imageMin = require("gulp-imagemin");

module.exports = function images() {
	const mode = globalSet.mode == 1;
	// let inputDir = globalSet.src + "/img/**/*.{gif,jpg,jpeg,png,tiff,webp}",
	let inputDir = globalSet.src + "/img/**/*.*",
		outputDir = mode ? globalSet.dev + "/img/" : globalSet.build + "/assets/img/";

	return modules.gulp
		.src(inputDir)
		.pipe(
			modules.plumber(
				modules.gulpIf(globalSet.notify,
					modules.notify.onError({
						title: "➤ Images",
						message: "❌ Error: <%= error.message %>",
					}))
			))
		.pipe(modules.newer(globalSet.src + "/img/**/*.webp"))
		.pipe(webp())
		.pipe(modules.newer(globalSet.src + "/img"))
		.pipe(modules.gulp.dest(globalSet.src + "/img"))
		.pipe(modules.gulp.src(inputDir))
		.pipe(modules.newer(outputDir))
		.pipe(
			modules.gulpIf(!mode,
				imageMin([
					imageMin.gifsicle({ interlaced: true }),
					imageMin.mozjpeg({ quality: 75, progressive: true }),
					imageMin.optipng({ optimizationLevel: 4 }),
					imageMin.svgo({
						plugins: [
							{ removeViewBox: true },
							{ cleanupIDs: false }
						]
					})
				])
			)
		)
		.pipe(modules.gulp.dest(outputDir))
		.pipe(modules.gulpIf(mode, modules.browserSync.stream()));

}
