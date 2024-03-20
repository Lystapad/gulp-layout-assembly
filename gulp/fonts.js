// Fonts
const modules = require("./modules");
const globalSet = require("./config");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const fontFaceGen = require("gulp-fontfacegen-mod");

module.exports = function fonts() {
	const mode = globalSet.mode == 1;
	let inputDir = globalSet.src + "/fonts/*.*",
		outputDir = mode ? globalSet.dev + "/fonts/" : globalSet.build + "/assets/fonts/";

	return modules.gulp
		.src(inputDir)
		.pipe(
			modules.plumber(
				modules.gulpIf(globalSet.notify,
					modules.notify.onError({
						title: "➤ Fonts",
						message: "❌ Error: <%= error.message %>",
					}))
			))
		.pipe(modules.newer(outputDir))
		.pipe(fonter({
			formats: ["woff", "ttf"],
		}))
		.pipe(ttf2woff2())
		.pipe(modules.newer(outputDir))
		.pipe(fontFaceGen({
			filepath: globalSet.src + "/styles/Import",
			rewrite: globalSet.fontFaceGen
		}))
		.pipe(modules.gulp.dest(outputDir));
};
