import * as React from 'react';

class MyReactComponentModel {
    public title: string = 'Hello world React!';
}

export class MyReactComponent extends React.Component<MyReactComponentModel, any> {

    constructor(model:MyReactComponentModel) {
        super(model);
    }

    render() {
        return <div>Hello world react!</div>
    }
}