function ScannerTags(tags){
  this.tags= tags;
}

ScannerTags.prototype.splitTags = function() {
  var cartItems = [];
  var allItems = loadAllItems();
  var that = this;

  _.forEach(this.tags, function(tag){
    var tagsArray = tag.split('-');
    var barcode = tagsArray[0];
    var count = 1;

    if(tagsArray[1]){
      count = parseFloat(tagsArray[1]);
    }
    cartItems = that.getCartItems(cartItems, count, allItems, barcode);
  });
  return cartItems;
};

ScannerTags.prototype.getCartItems = function(cartItems, count, allItems, barcode) {
  var cartItem = _.find(cartItems, function(cartItem) {
    return cartItem.item.barcode === barcode;
  });

  if (cartItem) {
    cartItem.count += count;
  } else {
    var item = _.find(allItems, function(allItem) {
      return allItem.barcode === barcode;
    });
    cartItems.push(new CartItems(item,count));
  }
  return cartItems;
};
