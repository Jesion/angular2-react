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
           <div>
                <h2>{this.props.title}</h2>
           </div>
        );
    }
});

export class SimpleReactComponentView {

    static initialize(title){
        React.render(<SimpleReactComponent title={title}/>, document.getElementById('react-component-container'));
    }
}
