import * as _ from 'underscore';

export class Map<String,V> {

    private _map: { [ key: string ]: V } = {};

    constructor() {
        
    }

    public add( key: string, value: V ) {
        this._map[ key ] = value;
    }

	public get( key: string ): V {
		let mapKeys: string[] = Object.keys( this._map );
		let value: V;
		mapKeys.forEach(mapKey => {
			if( mapKey === key ) {
				value = this._map[ key ];                
			}
		});
		return value;
	}

    public values(): Array<V> {
        let keys: string[] = Object.keys( this._map );
        let values: Array<V> = [];
        keys.forEach(key => {
            values.push( this._map[ key ] );
        });
        return values;
    }

    public count(): number {
        let keys: string[] = Object.keys( this._map );
        return keys.length;
    }

    public clear() {
        let keys: string[] = Object.keys( this._map );
        keys.forEach(key => {
            delete this._map[ key ];
        })     
    }
}
