var _ = require( 'lodash' )

var Store = function( name, location, balance ) {
  this.name = name;
  this.location = location;
  this.balance = balance;
  this.stock = [];
  this.secondHand = [];
}

Store.prototype = {
  addStock: function( record, quantity ) {
    for( var i = 0; i < quantity; i++ ) {
      this.stock.push( record );
      this.balance -= ( record.price / 2 );
    }
  },

  buy: function( record ) {
      this.secondHand.push( record );
      this.balance -= ( record.price / 2 );
  },

  search: function( stock ) { 
    if( !stock ) return this.stock;
    var foundRecord = 0;
    this.stock.forEach( function( record ) { 
      if( record.title === stock ){
        foundRecord = record;
      }
    } )
    return foundRecord;
  },

  inventory: function() {
    var listAll = 0
    _.forEach( this.stock, function( item ) {
      listAll = item;
    })
    return listAll
  },

  sell: function( customer, album ) {
    for( sold_album of this.stock ) {
      if( album.title === sold_album.title ) {
        this.balance += sold_album.price;
        customer.buy( album );
        this.stock.splice( sold_album.index, 1);
        break
      }
    }
  },

  sellSecondHand: function( customer, album ) {
    for( sold_album of this.secondHand ) {
      if( album.title === sold_album.title ) {
        this.balance += ( sold_album.price * 0.75 );
        customer.buySecondHand( album );
        this.secondHand.splice( sold_album.index, 1);
        break
      }
    }
  },

  totesValue: function() {
    this.total = 0;
    this.stock.forEach( function( album ) {
      this.total += album.price;
    }.bind( this ) );
    return this.total += this.balance;
  },



}
module.exports = Store;

















