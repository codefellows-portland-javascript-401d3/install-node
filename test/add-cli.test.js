var assert = require( 'assert' );
var exec = require( 'child_process' ).execSync;

describe( 'cli', () => {
	it( 'adds', () => {
		var result = exec( 'node add-cli.js 4 34' ).toString();
		assert.equal( result, 38 );
	})
})