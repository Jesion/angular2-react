///<reference path="../../typings/globals/es6-shim/index.d.ts"/>
///<reference path="../../typings/modules/react/index.d.ts"/>

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

//Using JIT compiler here
platformBrowserDynamic().bootstrapModule(AppModule);
