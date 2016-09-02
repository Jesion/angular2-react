import {Map} from './map';

describe('Map', () => {

	it('counts entries', () => {

		let map: Map<String, boolean> = new Map<String, boolean>();

		map.add( 'key1', true );
		map.add( 'key2', false );
		expect( map.count() ).toEqual( 2 );
	});

	it('gets value', () => {

		let map: Map<String, boolean> = new Map<String, boolean>();

		map.add( 'key1', true );

		expect( map.get('key1') ).toBe( true );
	});
});
