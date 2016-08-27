///<reference path="../../../../../_typings/react/index.d.ts"/>
///<reference path="../../../../../typings/globals/underscore/index.d.ts"/>

import * as React from 'react';
import * as _ from 'underscore';

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
