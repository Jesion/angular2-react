import { Injectable } from '@angular/core';

@Injectable()
export class Model {

    public uuid: string;

    public title: string = 'Hello World Angular 2!';

    public componentTitle: string = 'Hello World React!';

    public colors: Array<string> = ['yellow', 'blue', 'orange', 'black', 'white'];

    constructor() {
        this.uuid = uuid.v4();
    }
}
