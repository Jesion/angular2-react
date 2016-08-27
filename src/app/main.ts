///<reference path="../../typings/index.d.ts"/>
///<reference path="../../_typings/react/index.d.ts"/>

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

//Using JIT compiler here
platformBrowserDynamic().bootstrapModule(AppModule);
