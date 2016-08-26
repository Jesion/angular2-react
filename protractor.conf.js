// An example configuration file.
exports.config = {

	baseUrl: 'http://localhost:3000/',

	directConnect: true,

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
      		'args': ['show-fps-counter=true']
    	}
	},

	// Framework to use. Jasmine is recommended.
	framework: 'jasmine2',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs: ['dist-tests/**/*.e2e-spec.js'],

	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},		

	allScriptsTimeout: 110000,

	chromeDriver: 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe',

	useAllAngular2AppRoots: true,

	onPrepare: function() {
		browser.ignoreSynchronization = true;
	}
};
