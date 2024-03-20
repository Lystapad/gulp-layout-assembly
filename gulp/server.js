// Server by browserSync
const globalSet = require("./config");
const modules = require("./modules");

const Server = (done) => {
	return modules.browserSync.init({
		server: {
			baseDir: globalSet.dev
		},
		notify: false,
		port: 8080,
		open: false
		// https: true,
		// browser: ["google chrome", "firefox"]
	});
}

module.exports = Server;
