//"main": "gulpfile.js" -- version 1.0.4 (require)
const globalSet = require("./gulp/config");
const modules = require("./gulp/modules");
const tasks = require("./gulp/tasks");

function setMode(mode = 0) {
	return cb => {
		globalSet.mode = mode;
		cb();
	};
}

function watcher() {
	modules.gulp.watch(globalSet.src + "/files/**/*.*", tasks.files);
	modules.gulp.watch(globalSet.src + "/**/*.{pug,html}", tasks.html);
	modules.gulp.watch(globalSet.src + "/img/**/*.*" , tasks.images);
	modules.gulp.watch([`${globalSet.src}/js/**/*.js`, `!${globalSet.src}/js/js_old/**/*`], tasks.js);
	modules.gulp.watch(globalSet.src + "/**/*.{css,styl}", tasks.styles);
}

const build = modules.gulp.series(
	tasks.fonts,
	modules.gulp.parallel(tasks.files, tasks.styles, tasks.js, tasks.images),
 tasks.html
);

module.exports.start = modules.gulp.series(setMode(1), tasks.clean, build, modules.gulp.parallel(watcher, tasks.server));
module.exports.build = modules.gulp.series(setMode(2), tasks.clean, build, tasks.purgecss);
module.exports.clean = modules.gulp.series(setMode(0), tasks.clean);
