var Record = require( '../record' );
var Store = require( '../store' );
var Customer = require( '../customer' );
var assert = require( 'chai' ).assert;

describe( "The Store: ", function() {
  beforeEach( function() {
    bleach = new Record( "Nirvana", "Bleach", 8 )
    point = new Record( "Cornelius", "Point", 10 )
    likeClockwork = new Record( "QOTSA", "Like Clockwork", 9 )

    jeff = new Customer( "Jeff", 1000 )

    bigDaves = new Store( "Big Dave's", "Dundee", 100)
  })

  it( "Should have a name", function() {
    assert.equal( "Big Dave's", bigDaves.name )
  })

  it( "Should have a location", function() {
    assert.equal( "Dundee", bigDaves.location )
  })

  it( "Should have an opening balance", function() {
    assert.equal( 100, bigDaves.balance )
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
    bigDaves.sell( jeff, bleach );
    assert.equal( 104, bigDaves.balance )
  })

  it( "Should remove item from stock", function() {
    bigDaves.addStock( bleach, 1 );
    bigDaves.sell( jeff, bleach );
    assert.deepEqual( [], bigDaves.stock )
  })

  it( "Should be able to add multiple stock", function() {
    bigDaves.addStock( bleach, 5 );
    assert.equal( 5, bigDaves.stock.length )
  })

  it( "Should only delete one when selling", function() {
    bigDaves.addStock( bleach, 5 );
    bigDaves.sell( jeff, bleach );
    assert.equal( 4, bigDaves.stock.length )
  })

  it( "Should give total of stock value and balance", function() {
    bigDaves.addStock( bleach, 5 );
    bigDaves.sell( jeff, bleach );
    assert.equal( 120, bigDaves.totesValue() )
  })

  it( "Jeff should lose money when buying the item", function() {
    bigDaves.addStock( bleach, 5 )
    bigDaves.sell( jeff, bleach );
    assert.equal( 992, jeff.cash )
  })

  it( "Jeff should gain album when buying the item", function() {
    bigDaves.addStock( bleach, 5 )
    bigDaves.sell( jeff, bleach );
    assert.deepEqual( bleach, jeff.purchases[0] )
  })

  it( "Should cost to buy stock", function() {
    bigDaves.balance = 1000;
    bigDaves.addStock( bleach, 5 );
    assert.equal( 980, bigDaves.balance )

  })

} )


















