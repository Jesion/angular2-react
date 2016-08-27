System.config({
	transpiler: 'typescript',
	typescriptOptions: { emitDecoratorMetadata: true },
	map: {
		'app' : 'app',
		'rxjs': 'components/npm/rxjs',
		'@angular'                         : 'components/npm/@angular',
		'react'							   : 'components/bower/react',		
		'underscore'					   : 'components/bower/underscore'
	},
	packages: {
		'app'                              : { main: 'main.js', defaultExtension: 'js', format: 'register' },
		'rxjs'                             : { main: 'index.js' },
		'@angular/core'                    : { main: 'index.js' },
		'@angular/common'                  : { main: 'index.js' },
		'@angular/compiler'                : { main: 'index.js' },
		'@angular/http'                    : { main: 'index.js' },
		'@angular/forms'				   : { main: 'index.js' },
		'@angular/router'                  : { main: 'index.js' },
		'@angular/platform-browser'        : { main: 'index.js' },
		'@angular/platform-browser-dynamic': { main: 'index.js' },
		'react'							   : { main: 'react.js' },		
		'underscore'					   : { main: 'underscore.js' }
	}
});
