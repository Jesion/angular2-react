import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ValueStore } from '../../host/redux/list.store';
import { removeLast } from '../../host/redux/list.action';
import { Injector } from '@angular/core';
import { Model } from '../../../domain/model';

interface ReactChildComponentViewProps {
   title: String;
   store: ValueStore;
   injector: Injector;
}

var ReactChildComponent = React.createClass<ReactChildComponentViewProps, any>({

	getInitialState: function() {
		let model: Model = this.props.injector.get( Model );
		console.log( 'Using Angular 2 injector in React body, model.uuid: ' + model.uuid );
		this.props.store.store.subscribe(() => {
			 this.setState({                 
				'elements' : this.props.store.store.getState()
			 });      
		});
		return { 
			'title': this.props.title,             
			'elements': this.props.store.store.getState() 
		}       
	},

	click: function() {
		this.props.store.dispatch( removeLast() );
	},

	render: function() {
		var elements = this.state.elements;
		var styles = { 'paddingTop': '20px' };
		return(
		   <div>
			<label>{this.state.title + ' Current state elements: ' +  elements.length}</label>
			<div style={styles}>
				<button onClick={this.click}>Remove Last</button>
			</div>
			<ul>
				{elements.map(function(listValue, i){
					return <li key={i}>{listValue}</li>;
				})}
			</ul>            
		   </div>
		);
	}
});

export class ReactChildComponentView {

	static initialize(title, store: ValueStore, containerId: string, injector: Injector) {
		ReactDOM.render(<ReactChildComponent title={title} store={store} injector={injector}/>, document.getElementById(containerId));
	}
}
