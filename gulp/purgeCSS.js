//purgeCSS
const modules = require("./modules");
const globalSet = require("./config");
const purgeCSS = require("gulp-purgecss");

module.exports = function purgecss() {
	if (globalSet.purgeCSS) {
		return modules.gulp
			.src("build/assets/**/*.css")
			.pipe(
				modules.plumber(
					modules.gulpIf(globalSet.notify,
						modules.notify.onError({
							title: "➤ Purge CSS",
							message: "❌ Error: <%= error.message %>",
						}))))
			.pipe(purgeCSS({
				content: ["build/*.html"]
			}))
			.pipe(modules.gulp.dest("build/assets"));
	} else {
		return Promise.resolve("the value is ignored").then(() => console.log(modules.coloring.cyan("✔ Purge CSS is disabled")));
	}
};
