var Customer = require( '../customer' );
var assert = require( 'chai' ).assert;

describe( "The Customer: ", function() {
  beforeEach( function() {
    jeff = new Customer( "Jeff", 50 )
  })

  it( "Should have a name", function() {
    assert.equal( "Jeff", jeff.name )
  })

  it( "Should have some cash", function() {
    assert.equal( 50, jeff.cash )
  })
})