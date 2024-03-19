## GULP assembly for layout automation (Pug, Stylus)

### Launch of the projects
`**npm install**`
### Project development
`npm start`
### Live HTML
`http://localhost:8080`
### Production
`npm run build`
### Cleaning
`npm run clean`
### Lighthouse analyzes
[Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.](https://github.com/GoogleChrome/lighthouse)<br>
`npm run lighthouse`
### Packaging the layout to a "zip" archive
`npm run zip`


## Using - changes in the configuration (./gulp/config.js) file

### Input directory
Input Folder (directory) where the project's source files are located const `inputDir`. *Default `"src"`*
### Build folder
Folder for the final build of the project in Production const `buildFolder`. *Default `"build"`*
### Development folder
Folder for the working build of the project in Development const `developFolder`. *Default `"dev"`*

### Notification messages
You can disable annoying messages (Mac Notification Center, Linux notifications or Windows native toaster) by setting const `notify` to `false` *Default `"true"`*. Or you can turn off notifications in the your OS.

### HTML autocomplete path
HTML autocomplete path will be relative or absolute for each target file. Absolute File Paths (../dir) or Relative File Paths. You can use Absolute Paths by setting const `relativePath` to `false`. *Default `"true"`*

### HTML Validator
[HTMLHint](https://htmlhint.com/)
Static code analysis tool for HTML. You can disable HTML Validator by setting const const `htmlValidator` to `false` *Default `"true"`*.

### BEM Validator
[Block Element Modifier](https://bem.info/)
You can disable BEM Validator by setting const const `bemValidator` to `false` *Default `"true"`*.

### Purge CSS
Purge CSS is a feature for removing unused CSS
[!WARNING] Be VERY careful - disabled by default!
You can enable CSS purge by setting const `purgeCSS` to `true` *Default `"false"`*.

### Font Face Generator
Generates a CSS file with the font name @font-face and its parameters: font-family, font-style, font-weight. [More details](https://www.npmjs.com/package/gulp-fontfacegen-mod)`"del", "add", "skip"` options are available.  const `fontFaceGen`. *Default `"add"`*

### ESLint 8
"Rules":
* `use strict`
* `;` - semicolon at the end of a sentence.
* Regular expression control `disabled`.
* Expected values or strict condition set as `warning`.

The following checks are commented out:
* `"curly": "error"` - "{}".
* `"quotes": ["error", "double"]` '"' double quotes.
if you need it just uncomment in `./gulp/js.js`

### JS Bags AutoFix
ESLint can automatically fix some JS problems (autofix). Old files are saved in `SRC/js/js_old` (with each new launch the files will be overwritten). You can disable JS Bags AutoFix by setting const `jsAutoFix` to `"false"` *Default `"true"`*.

> Version:
> * 1.0.2
>	 - written intentionally with "require";
>	 - removed the use of "global";
>	 - no more cyclical calls.
> * 1.0.3
>	 - added new modules:
>		* BEM Validator (Block Element Modifier (BEM) )
>		* HTML Validator (HTMLHint Static code analysis tool for HTML - final check after all modifications)
> * 1.0.4
>	 - added disable option:
>		* Notification messages
>		* BEM Validator
>		* HTML Validator
> * 1.0.5
>	 - added option:
>		* Purge CSS
>		* Autocomplete path in HTML
>		* JS Bags AutoFix by ESLint 8

> Information about the modules used is given in [Modules.md](./Modules.md)

> Special thanks to [HeyCisco](https://github.com/heycisco/gulp-starter-pack), from whom I spied a lot of things.
