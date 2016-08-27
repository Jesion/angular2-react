import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/host/host.component';

const routes: Routes = [
	{ path: '', redirectTo: 'host', terminal: true },
	{ path: 'host', component: MainComponent }
];

export const routing = RouterModule.forRoot(routes);
