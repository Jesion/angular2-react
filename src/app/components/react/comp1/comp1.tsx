import * as React from 'react';

interface SimpleReactComponentViewProps {
   title: String;
}

var SimpleReactComponent = React.createClass<SimpleReactComponentViewProps, any>({

    getInitialState: function() {
        return this.props;
    },

    onChange: function() {

    },

    componentDidMount: function() {

    },

    componentWillUnmount: function() {

    },

    render: function() {
        return(
           <div>{this.props.title}</div>
        );
    }
});

export class SimpleReactComponentView {

    static initialize(title){
        React.render(<SimpleReactComponent title={title}/>, document.getElementById('react-component-container'));
    }
}
