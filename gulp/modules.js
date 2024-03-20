//Export Modules
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpIf = require("gulp-if");
const coloring = require("chalk");
const newer = require("gulp-newer");
const browserSync = require('browser-sync').create();

const Modules = {
	gulp: gulp,
	plumber: plumber,
	notify: notify,
	gulpIf: gulpIf,
	coloring: coloring,
	newer: newer,
	browserSync: browserSync
};

module.exports = Modules;
