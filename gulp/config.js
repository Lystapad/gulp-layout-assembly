//Settings
const inputDir = "src";
const buildFolder = "build";
const developFolder = "dev";
const notify = true; // ERROR message by Mac Notification Center, Linux notifications or Windows native toaster & console
const bemValidator = true; // Block Element Modifier (BEM) Validator
const htmlValidator = true; // HTMLHint Static code analysis tool for HTML
const relativePath = true; // HTML autocomplete path will be relative or absolute for each target file.
const purgeCSS = false; //Removing unused CSS. Be VERY careful!
const fontFaceGen = "add"; //del, add, skip
const jsAutoFix = true; //JS Bags AutoFix by ESLint

const Config = {
	src: inputDir,
	build: buildFolder,
	dev: developFolder,
	mode: 0, // 0 - all remove, 1- Development mode, 2 - Production mode,
	notify: notify,
	bemValidator: bemValidator,
	htmlValidator: htmlValidator,
	relativePath: relativePath,
	purgeCSS: purgeCSS,
	fontFaceGen: fontFaceGen,
	jsAutoFix: jsAutoFix
};

module.exports = Config;
