//Copying files from a directory
const modules = require("./modules");
const globalSet = require("./config");

module.exports = function files() {
	const mode = globalSet.mode == 1;
	let inputDir = globalSet.src + "/files/**/*.*",
		outputDir = mode ? globalSet.dev + "/files" : globalSet.build + "/assets/files";
	return modules.gulp
		.src(inputDir)
		.pipe(
			modules.plumber(
				modules.gulpIf(globalSet.notify,
					modules.notify.onError({
						title: "➤ Copying files",
						message: "❌ Error: <%= error.message %>",
					})
				)
			)
		)
		.pipe(modules.gulp.dest(outputDir))
		.pipe(modules.gulpIf(mode, modules.browserSync.stream()));
}
