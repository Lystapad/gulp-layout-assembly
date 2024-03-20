// HTML
const modules = require("./modules");
const globalSet = require("./config");
const pugLinter = require("gulp-pug-linter");
const pug = require("gulp-pug");
const inject = require("gulp-inject");
const bemValidator = require("gulp-html-bem-validator");
const webpHtmlNosvg = require("gulp-webp-html-nosvg");
const htmlValidator = require("gulp-htmlhint");
const htmlmin = require("gulp-htmlmin");

module.exports = function html() {
	const mode = globalSet.mode == 1;
	let inputDir = globalSet.src + (mode ? "/**/*.pug" : "/*.pug"),
		outputDir = mode ? globalSet.dev : globalSet.build,
		path = mode ? [outputDir + "/styles/*.css", outputDir + "/js/*.js", outputDir + "/img/*.*",] : [outputDir + "/assets/css/*.css", outputDir + "/assets/js/*.js", outputDir + "/assets/img/*.*"], sources = modules.gulp.src(path, { read: false }),
		targetPath = globalSet.relativePath ? { ignorePath: [globalSet.dev, globalSet.build], addRootSlash: false } : { relative: true };

	return modules.gulp
		.src(inputDir)
		.pipe(
			modules.plumber(
				modules.gulpIf(globalSet.notify,
					modules.notify.onError({
						title: "➤ HTML",
						message: "❌ Error: <%= error.message %>",
					}))
			))
		.pipe(pugLinter({ reporter: "default" }))
		.pipe(pug({
			pretty: mode ? true : false
		}))
		.pipe(modules.gulpIf(globalSet.bemValidator, bemValidator()))
		.pipe(inject(sources, targetPath))
		.pipe(webpHtmlNosvg())
		.pipe(modules.gulpIf(globalSet.htmlValidator && mode,
			htmlValidator({ "doctype-first": false }),
			htmlValidator()
		))
		.pipe(modules.gulpIf(globalSet.htmlValidator, htmlValidator.failReporter()))
		.pipe(modules.gulpIf(!mode,
			htmlmin({
				collapseWhitespace: true,
				removeComments: true
			})))
		.pipe(modules.gulp.dest(outputDir))
		.pipe(modules.gulpIf(mode, modules.browserSync.stream()));
};
