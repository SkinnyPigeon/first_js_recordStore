var Record = require( '../record' );
var Store = require( '../store' );
var assert = require( 'chai' ).assert;

describe( "The Store: ", function() {
  beforeEach( function() {
    bleach = new Record( "Nirvana", "Bleach", 8 )
    point = new Record( "Cornelius", "Point", 10 )
    likeClockwork = new Record( "QOTSA", "Like Clockwork", 9 )

    bigDaves = new Store( "Big Dave's", "Dundee")
  })

  it( "Should have a name", function() {
    assert.equal( "Big Dave's", bigDaves.name )
  })

  it( "Should have a location", function() {
    assert.equal( "Dundee", bigDaves.location )
  })

  it( "Should have an empty opening balance", function() {
    assert.equal( 0, bigDaves.balance )
  })

  it( "Should have no stock to start with", function() {
    assert.deepEqual( [], bigDaves.stock )
  })

  it( "Should be able to add stock", function() {
    bigDaves.addStock( bleach, 1 );
    assert.deepEqual( bleach, bigDaves.stock[0] )
  })

  it( "Should search its inventory", function() {
    bigDaves.addStock( bleach, 1 );
    assert.deepEqual( bleach, bigDaves.search( "Bleach" ) )
  })

  it( "Should list all its inventory", function() {
    bigDaves.addStock( bleach, 1 );
    bigDaves.addStock( point, 1 );
    assert.deepEqual( ( bleach, point ), bigDaves.inventory() )
  })

  it( "Should sell goods and increase balance", function() {
    bigDaves.addStock( bleach, 1 );
    bigDaves.sell( bleach );
    assert.equal( 8, bigDaves.balance )
  })

  it( "Should remove item from stock", function() {
    bigDaves.addStock( bleach, 1 );
    bigDaves.sell( bleach );
    assert.deepEqual( [], bigDaves.stock )
  })

  it( "Should be able to add multiple stock", function() {
    bigDaves.addStock( bleach, 5 );
    assert.equal( 5, bigDaves.stock.length )
  })

  it( "Should only delete one when selling", function() {
    bigDaves.addStock( bleach, 5 );
    bigDaves.sell( bleach );
    assert.equal( 4, bigDaves.stock.length )
  })

  it( "Should give total of stock value and balance", function() {
    bigDaves.addStock( bleach, 5 );
    bigDaves.sell( bleach );
    assert.equal( 40, bigDaves.totesValue() )
  })



} )


















