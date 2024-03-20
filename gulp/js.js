// JavaScript
const modules = require("./modules");
const globalSet = require("./config");
const webPack = require("webpack-stream");
const esLint = require("gulp-eslint-new");

module.exports = function js() {
	const mode = globalSet.mode == 1;
	let inputDir = [`${globalSet.src}/js/**/*.js`, `!${globalSet.src}/js/js_old/**/*`],
		outputDir = mode ? globalSet.dev + "/js/" : globalSet.build + "/assets/js/",
		fix = globalSet.jsAutoFix;
	if (globalSet.jsAutoFix) {
		modules.gulp.src(inputDir)
			.pipe(modules.newer(globalSet.src + "/js/js_old"))
			.pipe(modules.gulp.dest(globalSet.src + "/js/js_old"))
	}
	return modules.gulp
		.src(inputDir)
		.pipe(
			modules.plumber(
				modules.gulpIf(globalSet.notify,
					modules.notify.onError({
						title: "➤ JS",
						message: "❌ Error: <%= error.message %>",
					})
				)
			)
		)
		.pipe(esLint(
			{
				overrideConfig:
				{
					"env": {
						"browser": true,
						"node": true,
						"commonjs": true,
						"jquery": true,
						"es6": true
					},
					"parserOptions": {
						"ecmaVersion": "latest",
						"sourceType": "module",
						"ecmaFeatures": {
							"jsx": true
						}
					},
					"extends": ["eslint:recommended"],
					"globals": { "chrome": "readonly" },
					"rules": {
						"strict": "error", // "use strict"
						"semi": ["error", "always"], //"; - semicolon at the end of a sentence"
						"no-control-regex": 0,
						"eqeqeq": "warn"  // Expected values or strict condition
						// "curly": "error", //"{}"
						// "quotes": ["error", "double"] //'"' double quotes
					},
				},
				"warnIgnored": true,
				"fix": fix
			},
		))
		.pipe(modules.gulpIf(globalSet.jsAutoFix, esLint.fix()))
		.pipe(esLint.format())
		.pipe(esLint.failAfterError())
		.pipe(
			webPack({
				mode: mode ? 'development' : 'production',
				output: {
					filename: mode ? 'index.js' : 'index.min.js',
				}
			})
		)
		.pipe(modules.gulp.dest(outputDir));
};
