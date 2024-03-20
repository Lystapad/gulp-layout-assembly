// Styles

const modules = require("./modules");
const globalSet = require("./config");
const postcss = require("gulp-postcss");
const stylus = require("gulp-stylus");
const cleanCSS = require("gulp-cleaner-css");
const sortMediaQuery = require("postcss-sort-media-queries");
const flexBugsFixes = require("postcss-flexbugs-fixes");
const webpCSS = require("webp-in-css/plugin.js");
const transitionCSS = require("postcss-will-change-transition");
const CSSnano = require("cssnano");
const rename = require("gulp-rename");


const devPostCSS = [
	sortMediaQuery(),
	flexBugsFixes(),
	webpCSS(),
	transitionCSS(),
	CSSnano({
		preset: [
			"default",
			{
				normalizeWhitespace: false,
				discardComments: false,
				cssDeclarationSorter: { order: "smacss" },
			},
		],
	}),
];
const buildPostCSS = [
	sortMediaQuery(),
	flexBugsFixes(),
	webpCSS(),
	transitionCSS(),
	CSSnano({
		preset: [
			"advanced",
			{
				iscardComments: { removeAll: true },
				cssDeclarationSorter: { order: "smacss" },
			},
		],
	}),
];

function report(details) {
	function print(params) {
		let action = params == 1 ? {
			detal: details.errors,
			topic: "❌ Errors: ",
			color: modules.coloring.red
		} : {
			detal: details.warnings,
			topic: "⚠ Warnings: ",
			color: modules.coloring.hex("#FFA500")
		};

		console.log(action.color(action.topic + action.detal.length));
		action.detal.forEach(element => {
			console.log(action.color(element.replace(/\n/g, ' ')));
		});
	}
	if (details.errors.length || details.warnings.length) {
		console.log(modules.coloring.cyan("➤ cleanCSS in: " + details.name));
		if (details.errors.length) print(1);
		if (details.warnings.length) print(2);
	}
}

module.exports = function styles() {
	const mode = globalSet.mode == 1;
	let inputDir = mode ? [globalSet.src + "/**/*.css", globalSet.src + "/**/*.styl"] : [globalSet.src + "/*/*.css", globalSet.src + "/*/*.styl"],
		outputDir = mode ? globalSet.dev : globalSet.build + "/assets",
		stylusOptions = mode ? { "include css": true } : { "include css": true, compress: true },
		postCSS = mode ? devPostCSS : buildPostCSS,
		cleanCSSopt = mode ? {
			format: 'beautify',
			removeDuplicateRules: true,
		} : { removeDuplicateRules: true };

	return modules.gulp
		.src(inputDir)
		.pipe(
			modules.plumber(
				modules.gulpIf(globalSet.notify,
					modules.notify.onError({
						title: "➤ CSS",
						message: "❌ Error: <%= error.message %>",
					})
				)
			)
		)
		.pipe(stylus(stylusOptions))
		.pipe(postcss(postCSS))
		.pipe(cleanCSS(cleanCSSopt, details => report(details)))
		.pipe(modules.gulpIf(!mode, rename({ suffix: ".min" })))
		.pipe(modules.gulpIf(!mode, rename({ dirname: "/css" })))
		.pipe(modules.gulp.dest(outputDir));
};
