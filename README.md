# Angular 2 shell application interacting with React component

# building and running the bare shell project

1. Run `npm install -g gulp` to install Gulp.
2. Run `npm install -g bower` to install Bower.
3. Run `npm install` to install required node modules and bower components.
4. Run `typings install` to install typescript definitions.
5. Run `tsc -m system -t es5 --emitDecoratorMetadata --experimentalDecorators --jsx react --outDir dist --rootDir src` to compile TypeScript (with JSX supprt).
6. Run `gulp build` to build the application.
7. Run `npm start` to launch it.
