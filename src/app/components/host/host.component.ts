import { Component, OnInit } from '@angular/core';
import { MyReactComponent } from '../react/comp1/comp1';

@Component({
	selector: 'host-component',
	templateUrl: 'app/components/host/host.component.html',
	styleUrls: ['app/components/host/host.component.css'],
	providers: [
	
	]
})

export class HostComponent implements OnInit { 

    public title: string = 'Hello world!';

	constructor() {
	
	}

	public ngOnInit() {

	}
}