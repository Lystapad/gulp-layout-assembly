//Export Tasks

const clean = require("./clean");
const html = require("./html");
const styles = require("./styles");
const purgecss = require("./purgeCSS");
const fonts = require("./fonts");
const images = require("./images");
const js = require("./js");
const files = require("./files")
const server = require("./server")

const Tasks = {
	clean: clean,
	html: html,
	styles: styles,
	purgecss: purgecss,
	fonts: fonts,
	images: images,
	js: js,
	files: files,
	server: server
};

module.exports = Tasks;
