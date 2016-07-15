var Customer = require( '../customer' );
var Record = require('../record');

var assert = require( 'chai' ).assert;

describe( "The Customer: ", function() {
  beforeEach( function() {
    bleach = new Record( "Nirvana", "Bleach", 8 )
    bleachSpecial = new Record( "Nirvana", "Bleach Special Edition", 51 )
    jeff = new Customer( "Jeff", 50 )
  })

  it( "Should have a name", function() {
    assert.equal( "Jeff", jeff.name )
  })

  it( "Should have some cash", function() {
    assert.equal( 50, jeff.cash )
  })

  it( "Should not have any records to start with", function() {
    assert.deepEqual( [], jeff.purchases )
  })

  it( "Should be able to buy a record they can afford", function() {
    jeff.buy( bleach )
    assert.equal( 1, jeff.purchases.length )
  })

  it( "Should not be able to buy a record they cannot afford", function() {
    jeff.buy( bleachSpecial )
    assert.equal( 0, jeff.purchases.length )
  })

  it( "Should reduce thier cash when purhcasing", function() {
    jeff.buy( bleach )
    assert.equal( 42, jeff.cash )
  })

  it( "Should be able to sell records in their collection", function() {
    jeff.buy( bleach )
    jeff.sell( bleach )
    assert.equal( 46, jeff.cash )
  })


})







