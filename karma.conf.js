module.exports = function(config) {
	
	config.set({

		basePath: '',

		frameworks: ['jasmine'],

		files: [

			'dist/components/npm/es6-shim/es6-shim.min.js',
			'dist/components/npm/reflect-metadata/Reflect.js',
			'dist/components/npm/systemjs/system-polyfills.js',
			'dist/components/npm/systemjs/system.src.js',
			'dist/components/npm/zone.js/dist/zone.js',
			'dist/components/npm/zone.js/dist/jasmine-patch.js',
			'dist/components/npm/zone.js/dist/async-test.js',

			{ pattern: 'dist/components/npm/rxjs/**/*.js', included: false, watched: false },
			{ pattern: 'dist/components/npm/rxjs/**/*.js.map', included: false, watched: false },

			{pattern: 'karma-test-shim.js', included: true, watched: true},

			{pattern: 'dist/components/npm/@angular/**/*.js', included: false, watched: true},
			{pattern: 'dist/components/npm/@angular/**/*.js.map', included: false, watched: true},

			{pattern: 'dist/**/*.js', included: false, watched: true},
			{pattern: 'dist/**/*.html', included: false, watched: true},
			{pattern: 'dist/**/*.css', included: false, watched: true},
			{pattern: 'src/**/*.ts', included: false, watched: true},
		],

		proxies: {
			'/app/': '/base/dist/app/',
			'/src/': '/base/src/'
		},

	 	plugins: [
			'karma-jasmine',
			'karma-chrome-launcher'
		],

		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
	 	reporters: ['progress', 'dots'],
		singleRun: true
		
	})
}
