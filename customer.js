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



}


module.exports = Customer;