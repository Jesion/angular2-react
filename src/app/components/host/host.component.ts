import { Component, OnInit } from '@angular/core';
import { SimpleReactComponentView } from '../react/comp1/comp1';

@Component({
	selector: 'host-component',
	templateUrl: 'app/components/host/host.component.html',
	styleUrls: ['app/components/host/host.component.css'],
	providers: [
	
	]
})

export class MainComponent implements OnInit { 

    public title: string = 'Hello world Angular 2!';
	public helloReact: string = 'Hello react!';

	constructor() {
	
	}

	public ngOnInit() {
		SimpleReactComponentView.initialize(this.helloReact);
	}
}