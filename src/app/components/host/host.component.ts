import { Component, OnInit, Injector } from '@angular/core';
import { ReactChildComponentView } from '../react/child/child';
import { ValueStore } from './redux/list.store';
import { add, remove } from './redux/list.action';
import { Model } from '../../domain/model';

@Component({
	selector: 'host-component',
	templateUrl: 'app/components/host/host.component.html',
	styleUrls: ['app/components/host/host.component.css'],
	providers: [
		Model
	]
})

export class HostComponent implements OnInit { 
	
	public store: ValueStore;

	public val: string = 'red';
	
	constructor( public model: Model, public injector: Injector ) {
		this.initStore();		
		console.log('Resolved model instance: ' + model.uuid);	
	}

	public initStore() {
		this.store = new ValueStore( this.model.colors );
		this.store.store.subscribe(() => {
			console.log('on state change (angular 2 host): ' + this.store.store.getState().length);
		});
	}

	public ngOnInit() {
		ReactChildComponentView.initialize( this.model.componentTitle, this.store, 'react-component-container', this.injector );
		ReactChildComponentView.initialize( this.model.componentTitle, this.store, 'react-component-container-2', this.injector );
	}

	public onAdd() {
		this.store.dispatch( add( this.val ) );
	}

	public onRemove() {
		this.store.dispatch( remove ( this.val ) );
	}
}
