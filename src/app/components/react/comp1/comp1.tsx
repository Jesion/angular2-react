import * as React from 'react';
import { ValueStore } from '../../host/redux/list.store';

interface SimpleReactComponentViewProps {
   title: String;
   store: ValueStore;
}

var SimpleReactComponent = React.createClass<SimpleReactComponentViewProps, any>({

    getInitialState: function() {
         this.props.store.store.subscribe(() => {
            console.log('React captured store changed: ' + this.props.store.store.getState().length);
            this.setState({ 'count': this.props.store.store.getState().length });      
        });
        return { 'title': this.props.title, 'count':  this.props.store.store.getState().length }       
    },

    render: function() {
        return(
           <div>{this.state.title + 'Elements in store: ' +  this.state.count}</div>
        );
    }
});

export class SimpleReactComponentView {

    static initialize(title, store: ValueStore, containerId){
        React.render(<SimpleReactComponent title={title} store={store}/>, document.getElementById(containerId));
    }
}
