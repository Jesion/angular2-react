import * as _ from 'underscore';

export class Map<String,V> {

    private _map: { [ key: string ]: V } = {};

    constructor() {
        
    }

    public add( key: string, value: V ) {
        this._map[ key ] = value;
    }
}
