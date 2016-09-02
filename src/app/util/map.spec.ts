import {inject} from '@angular/core/testing';
import {Map} from './map';

describe('Map', () => {

	it('correctly inserting and retrieving stuff', () => {

        let map:Map<String, boolean> = new Map<String, boolean>();

        map.add( 'key1', true );
        map.add( 'key2', false );

        expect( true ).toEqual( false );
	});

});