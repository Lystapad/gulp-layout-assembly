// Clean
const globalSet = require("./config");
const del = require("del");

module.exports = function clean(cb) {
	let cleanFolder;
	switch (globalSet.mode) {
		case 0:
			cleanFolder = [globalSet.build, globalSet.dev];
			break;
		case 1:
			cleanFolder = [`${globalSet.dev}/{js,styles}`, `${globalSet.dev}/*.*`];
			break;
		case 2:
			cleanFolder = globalSet.build;
		default:
			cleanFolder = [globalSet.build, globalSet.dev];
			break;
	}
	return del(cleanFolder).then(() => {
		cb();
	});
};
