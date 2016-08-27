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

    public title: string = 'Hello world Angular 2!';
	public helloReact: string = 'Hello react!';
	
	public store: ValueStore;

	public val: string;
	
	constructor() {
		this.initStore();			
	}

	public initStore() {
		this.store = new ValueStore( ['yellow', 'blue'] );
		this.store.store.subscribe(() => {
			//value store changed...
		});
	}

	public ngOnInit() {
		SimpleReactComponentView.initialize( this.helloReact );
	}

	public onAdd() {
		this.store.dispatch( add( this.val ) );
	}

	public onRemove() {
		this.store.dispatch( remove ( this.val ) );
	}
}
