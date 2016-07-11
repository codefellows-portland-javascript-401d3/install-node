var assert = require( 'assert' );
var add = require( '../add' );

describe( 'adds', () => {

	it( 'two numbers', () => {
		assert.equal( add( 3, 4 ), 7 );
	});

});