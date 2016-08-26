const gulp = require('gulp');
const del = require('del');
const copy = require('gulp-copy');
const typescript = require('gulp-typescript');
const typescriptProj = typescript.createProject('tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tsconfig = require('./tsconfig.json');
const gls = require('gulp-live-server');
const tslint = require('gulp-tslint');
const Server = require('karma').Server;
const sass = require('gulp-sass');
const less = require('gulp-less');
const typings = require('gulp-typings');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const protractor = require("gulp-protractor").protractor;

gulp.task('test', function (done) {
	new Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

gulp.task('clean', function () {
	return del(['dist', 'dist-tests', 'coverage', 'typings']);
});

gulp.task('copy:libs', function() {	
	gulp.src(['node_modules/es6-shim/es6-shim.min.js'])  
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/es6-shim'));
	gulp.src(['node_modules/systemjs/dist/system-polyfills.js'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/systemjs'));	
	gulp.src(['node_modules/systemjs/dist/system.src.js'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/systemjs'));	  
	gulp.src(['node_modules/rxjs/bundles/Rx.js'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/rxjs'));	    
	gulp.src(['src/components/materialize/**/*'])
		.pipe(gulp.dest('dist/components/manual/materialize'));			 
	gulp.src(['node_modules/ng2-material/dist/*'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/ng2-material'));	 
	gulp.src(['node_modules/ag-grid-ng2/**/*'], {
		base: 'node_modules'
	}).pipe(gulp.dest('dist/components/npm'));	  
	gulp.src(['node_modules/ag-grid/**/*'], {
		base: 'node_modules'
	}).pipe(gulp.dest('dist/components/npm'));	   
	gulp.src(['node_modules/jasmine-core/**/*'], { base: 'node_modules' })
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/jasmine-core'));	
	gulp.src(['components/bootstrap/dist/**/*'], { base: 'components' })
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/bower/bootstrap'));	
	gulp.src(['components/jquery/dist/**/*'], { base: 'components' })
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/bower/jquery'));
	gulp.src(['components/underscore/**/*'], { base: 'components' })
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/bower/underscore'));
	gulp.src(['src/font/**/*'])
		.pipe(gulp.dest('dist/font'));
	gulp.src(['node_modules/angular2-materialize/dist/*'], {base: 'node_modules'})
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/angular2-materialize'));			
	gulp.src(['node_modules/redux/dist/*'], {base: 'node_modules'})
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/redux'));	  
	gulp.src(['node_modules/immutable/dist/*'], {base: 'node_modules'})
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/immutable'));
	gulp.src(['node_modules/node-uuid/uuid.js'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/components/npm/node-uuid'));
	gulp.src(['node_modules/@angular/**/*'], { base: 'node_modules' })
		.pipe(gulp.dest('dist/components/npm'));	
	gulp.src(['node_modules/rxjs/**/*'], { base: 'node_modules' })
		.pipe(gulp.dest('dist/components/npm'));	
	gulp.src(['node_modules/zone.js/**/*'], { base: 'node_modules' })
		.pipe(gulp.dest('dist/components/npm'));
	gulp.src(['node_modules/typescript/**/*'], { base: 'node_modules' })
		.pipe(gulp.dest('dist/components/npm'));	
	gulp.src(['node_modules/reflect-metadata/**/*'], { base: 'node_modules' })
		.pipe(gulp.dest('dist/components/npm'));
});

gulp.task('copy:fonts', function() {
	return gulp.src(['src/font/**/*'])
		.pipe(gulp.dest('dist/font'))
});

gulp.task('copy:css', function() {
	return gulp.src(['src/css/*.css'])
		.pipe(gulp.dest('dist/css'));  
});

gulp.task('copy:assets', function() {
	gulp.src(['src/assets/**/*'], { base : './src'}) 
	.pipe(gulp.dest('dist')); 
	gulp.src(['src/app/**/*.html'], { base: './src/app'})
	.pipe(gulp.dest('dist/app'));   
});

gulp.task('copy:unit-test-html', function() {
	return gulp.src('src/unit-tests.html')  
		.pipe(gulp.dest('dist'));
});

gulp.task('copy:index', function() {
	return gulp.src('src/index.html')  
		.pipe(gulp.dest('dist'));
});

gulp.task('copy:data', function() {
	return gulp.src('data/*.*')
		.pipe(gulp.dest('dist/data'));
});

gulp.task('copy:systemjs-config', function() {
	return gulp.src('src/systemjs.config.js')
		.pipe(gulp.dest('dist'));
});

gulp.task('compile', ['installTypings'], function () {

//	var tsResult = typescriptProj.src()
//		.pipe(sourcemaps.init())
//		.pipe(typescript(typescriptProj))
//		.pipe(sourcemaps.write('.', { sourceRoot: __dirname + '/src/app' }));
//		
//		return tsResult.js.pipe(gulp.dest('dist'));

//
//	return gulp
//		.src(['src/app/**/*.ts'], {base : './src' })
//		.pipe(sourcemaps.init())
//		.pipe(typescript(tsconfig.compilerOptions))
//		.pipe(sourcemaps.write('.', { sourceRoot: __dirname + '/src/app' }))
//		.pipe(gulp.dest('dist'));

//this does not compile tsx
//return gulp
//		.src(['src/app/**/*.ts'], {base : './src' })
//		.pipe(sourcemaps.init())
//		.pipe(typescript({ jsx: 'react', experimentalDecorators: true, target: 'es5', module: 'system', moduleResolution: 'node' }))
//		.pipe(sourcemaps.write('.', { sourceRoot: __dirname + '/src/app' }))
//		.pipe(gulp.dest('dist'));
//});

return gulp
		.src(['src/app/**/*.ts'], {base : './src' })
		.pipe(sourcemaps.init())
		.pipe(typescript(tsconfig.compilerOptions))
		.pipe(sourcemaps.write('.', { sourceRoot: __dirname + '/src/app' }))
		.pipe(gulp.dest('dist'));
});

gulp.task('compile-e2e', function() {
	return gulp
		.src(['tests/**/*.ts'], {base : './tests' })
		.pipe(sourcemaps.init())
		.pipe(typescript(tsconfig.compilerOptions))
		.pipe(sourcemaps.write('.', { sourceRoot: __dirname + '/tests' }))
		.pipe(gulp.dest('dist-tests'));
});

gulp.task('installTypings', function () {
	return gulp.src('./typings.json')
		.pipe(typings());
});

gulp.task('sass', ['sass-components'], function() {
	return gulp
		.src(['src/skin/**/*.scss'])
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('less-cssplus', ['less-core', 'less-customs', 'less-plugins']);

gulp.task('less', ['less-components', 'less-cssplus']);

gulp.task('less-core', function() {
	return gulp
		.src(['src/skin/core/*.less'])
		.pipe(less())	
		.pipe(concat('core.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('less-customs', function() {
	return gulp
		.src(['src/skin/customs/*.less'])
		.pipe(less())	
		.pipe(concat('customs.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('less-plugins', function() {
	return gulp
		.src(['src/skin/plugins/**/*.less'])
		.pipe(less())	
		.pipe(concat('plugins.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('sass-components', function () {
	return gulp
		.src(['src/app/**/*.scss'], {base: './src'})
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('dist'));
});

gulp.task('less-components', function() {
	return gulp
		.src(['src/app/**/*.less'], {base: './src'})
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write('.', { sourceRoot: __dirname + '/src/app'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', [	
	'copy:index',
	'copy:systemjs-config',
	'copy:unit-test-html',
	'compile', 
	'sass',
	'less',
	'copy:libs',
	'copy:assets',
	'copy:css', 
	'copy:fonts',
	'copy:data'
	]
);

gulp.task('watch-dev', [
	'watch-dev-html', 
	'watch-dev-typescript', 
	'watch-dev-sass', 
	'watch-dev-less'
	]
);

gulp.task('watch-dev-html', function () {
	gulp.watch('src/**/*.html', ['copy:assets']);
});

gulp.task('watch-dev-typescript', function() {
	gulp.watch('src/**/*.ts', ['compile'])
});

gulp.task('watch-dev-sass', function () {
	gulp.watch('src/**/*.scss', ['sass'])
});

gulp.task('watch-dev-less', function () {
	gulp.watch('src/**/*.less', ['less']);
});

gulp.task('clean-build', ['clean'], function() {
	gulp.start('build');
});

gulp.task('default', ['clean-build'], function() {  
	setTimeout(function () {
		gulp.start('test');
	}, 30000);
});

gulp.task('tslint', function() {
	return gulp.src('src/app/**/*.ts')
		.pipe(tslint())
		.pipe(tslint.report('verbose'));
});

gulp.task('serve', ['default'], function() {
	var server = gls.static('dist', 3000);
	server.start();
});
