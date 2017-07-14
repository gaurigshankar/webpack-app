
### Reference
* https://www.youtube.com/watch?v=lziuNMk_8eQ
* https://www.youtube.com/watch?v=m7V0OackwxY&t=929s&index=3&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY
* https://www.youtube.com/watch?v=xn0rlcDq99U


* Simple Webpack app with Single Bundle
* can have dev mode and production build
* dev mode uses webpack dev server for hot reloading npm run hot
* Difference between webpack -d / webpack --watch and webpack-dev-server is , dev server have bundles in memory and not write into the disk
* production mode generates build file in dist/bundle.js


* webpack with multiple split bundles based on multiple entry point
* output bundle name as configured in webpack.config.js
* use to reduce the size of the bundle
* as explained in [here](https://webpack.github.io/docs/multiple-entry-points.html)



* Added Support for SaSS files with Sassloader and node-sass
* Added config for devServer inside webpack.config.js
* Added HTML Plugin to create index.html automatically with the webpack bundled script based on template


* Added Support for extract-text-webpack-plugin
* This plugin is used to separate out CSS modules from bundled js chunks into separate CSS file.
* When you look at the auto generated index.html in root directory , you can notice css file include apart from JS bundle includes.


* Added options to webpack-dev-server as configuration
* Clean the dist directory before new build using rimraf
* Moved the generated index.html to the root folder from inside dist/


* Enable HOT Module Replacement
* environment based css file generation. In Production build, use extract text webpack plugin to generate css. In development mode, the css file will not be extracted and would be available from memory
*  https://www.youtube.com/watch?v=faFJw1wjQLE&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY&index=9
* https://www.youtube.com/watch?v=NtyzJMi-a-M&index=10&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY
