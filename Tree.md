### Input directory
```
SRC > <!-- Working folder with project sources -->
 ├── files <!-- Folder for some project files... -->
 │    ├── images <!-- e.g. images -->
 │    └── *.* pdf, doc, videos and others
 │
 ├── fonts <!-- Folder containing font files -->
 │
 ├── html <!-- Folder containing HTML files -->
 │    └──Import
 │        ├── Head.pug <!-- Head block <head>...</head> -->
 │        ├── Header.pug <!-- Head block <header>...</header> -->
 │        ├── Footer.pug <!-- Footer block -->
 │        └── Layout.pug <!-- Basic Layout HTML page file, including index.pug -->
 │
 ├── img <!-- Folder containing images files -->
 │
 ├── js <!-- Folder containing JavaScript files -->
 │    ├── js_old <!-- Folder Old JS files before AutoFix -->
 │    ├── modules <!-- Folder JS import files -->
 │    └── index.js !-- Main JS file -->
 │
 ├── styles <!-- Folder containing styles files -->
 │    ├──Import
 │    │   ├── fonts.css <!-- Generated font file -->
 │    │   ├── normalize.css <!-- Normalization file -->
 │    │   └── media.styl !-- Media Styles file -->
 │    │
 │    └── style.styl <!-- Main Styles file -->
 │
 └── index.pug <!-- Basic HTML page file -->
 ```
### Development folder
```dev
 └── Same as input directory
```
### Build folder
```build
 ├── assets <!-- Site files folder -->
 │    ├── css <!-- Styles folder -->
 │    ├── files <!-- Folder for some project files -->
 │    ├── fonts <!-- Folder containing font files -->
 │    ├── img <!-- Folder containing images files -->
 │    └── js <!-- Folder containing JavaScript files -->
 │
 └── index.html
```
