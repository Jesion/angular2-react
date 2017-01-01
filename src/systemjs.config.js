System.config({
	transpiler: 'typescript',
	typescriptOptions: { emitDecoratorMetadata: true },
	map: {
		'app' 								: 'app',
		'rxjs'								: 'components/npm/rxjs',
		'@angular'							: 'components/npm/@angular',
		'react'								: 'components/npm/react',	
		'react-dom'							: 'components/npm/react-dom',	
		'underscore'						: 'components/bower/underscore',
		'moment'							: 'components/npm/moment',
		'redux'								: 'components/npm/redux',
		'@angular/platform-browser-dynamic' : 'components/npm/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
		'@angular/platform-browser'			: 'components/npm/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/compiler'					: 'components/npm/@angular/compiler/bundles/compiler.umd.js',
		'@angular/core'						: 'components/npm/@angular/core/bundles/core.umd.js',
		'@angular/core/testing'				: 'components/npm/@angular/core/bundles/core-testing.umd.js',
		'@angular/common'					: 'components/npm/@angular/common/bundles/common.umd.js',
		'@angular/http'						: 'components/npm/@angular/http/bundles/http.umd.js',
		'@angular/forms'					: 'components/npm/@angular/forms/bundles/forms.umd.js',
		'@angular/router'					: 'components/npm/@angular/router/bundles/router.umd.js',
		'node-uuid'							: 'components/npm/node-uuid/uuid.js'
	},
	packages: {
		'app'								: { main: 'main.js', defaultExtension: 'js' },
		'rxjs'								: { main: 'index.js' },
		'react'								: { main: 'react.js' },		
		'react-dom'							: { main: 'react-dom.js' },
		'underscore'						: { main: 'underscore.js' },
		'redux'								: { main: 'redux.js' },
		'moment'							: { main: 'moment.js' }
	}		
});
