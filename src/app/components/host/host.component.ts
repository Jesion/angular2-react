import { Component, OnInit } from '@angular/core';
import { SimpleReactComponentView } from '../react/comp1/comp1';
import { ValueStore } from './redux/list.store';
import { add, remove } from './redux/list.action';

@Component({
	selector: 'host-component',
	templateUrl: 'app/components/host/host.component.html',
	styleUrls: ['app/components/host/host.component.css'],
	providers: [
	
	]
})

export class HostComponent implements OnInit { 

    public helloAngular: string = 'Hello World Angular 2!';
	public helloReact: string = 'Hello World React!';
	
	public store: ValueStore;

	public val: string;
	
	constructor() {
		this.initStore();			
	}

	public initStore() {
		this.store = new ValueStore( ['yellow', 'blue'] );
		this.store.store.subscribe(() => {
			console.log('Angular 2 captured store changed: ' + this.store.store.getState().length);
		});
	}

	public ngOnInit() {
		SimpleReactComponentView.initialize( this.helloReact, this.store, 'react-component-container' );
		SimpleReactComponentView.initialize( this.helloReact, this.store, 'react-component-container-2' );
	}

	public onAdd() {
		this.store.dispatch( add( this.val ) );
	}

	public onRemove() {
		this.store.dispatch( remove ( this.val ) );
	}
}
