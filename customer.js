var Customer = function( name, cash ) {
  this.name = name;
  this.cash = cash;
  this.purchases = [];
}

Customer.prototype = {
  buy: function( album ) {
    if( this.cash >= album.price ){
      this.purchases.push( album );
      this.cash -= album.price;
    }
  },

  sell: function( store, album ) {
    for( sold_album of this.purchases ) {
      if( album.title === sold_album.title ) {
        this.cash += ( sold_album.price / 2 );
        store.balance -= ( sold_album.price / 2 );
        store.addStock( album );
        this.purchases.splice( sold_album.index, 1 );
        break
      }
    }
  },



}


module.exports = Customer;