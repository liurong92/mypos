function FindAllText(cartItems){
  this.cartItems = cartItems;
}

FindAllText.prototype.getCartItemsText = function(){
  cartItem = this.cartItems;
  cartItemsText = '';
  _.forEach(cartItems,function(cartItem){
    var promotionCount = getPromotionCount(cartItem);
    var proCount = parseInt(promotionCount/3);
    var subtotal = 0;
    item = cartItem.item;
    count = cartItem.count;

    if (proCount > 0) {
      subtotal = (count - proCount) * item.price;
    } else {
      subtotal = count * item.price;
    }
    cartItemsText += '名称：' + item.name +
    '，数量：' +count + item.unit +
    '，单价：' +item.price.toFixed(2) +
    '(元)，小计：' +subtotal.toFixed(2) +
    '(元)\n';
  });
  return cartItemsText;
}
