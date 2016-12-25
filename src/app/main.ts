import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

//Using JIT compiler here
platformBrowserDynamic().bootstrapModule(AppModule);
