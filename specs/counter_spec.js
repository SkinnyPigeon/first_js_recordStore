var Counter = require('../counter');

var assert = require( 'chai' ).assert;

describe( "The Counter: ", function() {
  beforeEach( function() {
    counter = new Counter( 1000 );
  })

  it( "Should return the total", function() {
    assert.equal( 1000, counter.total )
  })

  it( "Should split the numbers to an array", function() {
    assert.deepEqual( [ 1, 0, 0, 0 ], counter.convert() )
  })

})