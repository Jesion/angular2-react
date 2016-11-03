import { 
    NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HostComponent } from './components/host/host.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { HostComponent } from './components/host/host.component';

@NgModule({
    declarations: [ 
        AppComponent,
<<<<<<< HEAD
        HostComponent       
=======
        HostComponent   
>>>>>>> 417ebff... upgrading dependecies to angular
    ],
    imports: [ 
        routing,
        BrowserModule,
        HttpModule,
        FormsModule            
    ],   
    providers: [
        
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
}
