import { RouterModule, Routes } from '@angular/router';
import { HostComponent } from './components/host/host.component';

const routes: Routes = [
	{ path: '', redirectTo: 'host', pathMatch: 'full' },
	{ path: 'host', component: HostComponent }
];

export const routing = RouterModule.forRoot(routes);
