import * as React from 'react';
import { ValueStore } from '../../host/redux/list.store';

interface ReactChildComponentViewProps {
   title: String;
   store: ValueStore;
}

var ReactChildComponent = React.createClass<ReactChildComponentViewProps, any>({

    getInitialState: function() {
         this.props.store.store.subscribe(() => {
            console.log('React captured store changed: ' + this.props.store.store.getState().length);
            this.setState({ 'count': this.props.store.store.getState().length });      
        });
        return { 'title': this.props.title, 'count':  this.props.store.store.getState().length }       
    },

    render: function() {
        return(
           <div>{this.state.title + ' Current state: ' +  this.state.count}</div>
        );
    }
});

export class ReactChildComponentView {

    static initialize(title, store: ValueStore, containerId){
        React.render(<ReactChildComponent title={title} store={store}/>, document.getElementById(containerId));
    }
}
