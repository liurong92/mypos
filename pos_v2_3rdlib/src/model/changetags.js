function FindCartItems(tags){
  this.tags= tags;
}
FindCartItems.prototype.getCartItems = function(){
  var tags = this.tags;
  var cartItems = [];
  var loadAllItem = new loadAllItems();

  _.forEach(tags, function(tag){
    var tagsArray = tag.split('-');
    var barcode = tagsArray[0];
    var count = 1;

    if(tagsArray[1]){
      count = parseFloat(tagsArray[1]);
    }
    var cartItem = _.find(cartItems, function(cartItems){
      return cartItems.item.barcode === barcode;
    });

    if(cartItem){
      cartItem.count += count;
    }else{
      var item = _.find(loadAllItem, function(loadAllItem){
        return loadAllItem.barcode === barcode;
      });
      cartitem = new CartItems(item,count);
      cartItems.push(cartitem);
    }
  });
  return cartItems;
};
