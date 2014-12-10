function FindAllText(cartItems){
  this.cartItems = cartItems;
}

function getCountOfCart(){
  var promotions = loadPromotions();
  for(var i = 0; i < promotions.length; i++) {
    return promotions[i];
  }
}

FindAllText.prototype.getCartItemsText = function(){
  cartItems = this.cartItems;
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

FindAllText.prototype.getPromotionText = function() {
  cartItems = this.cartItems;
  var promotionText = '';
  var promotionArrays = [];
  _.forEach(cartItems,function(cartItem){
    promotionArrays = getPromotionArray(cartItem);
    if(promotionArrays.length > 0) {
      _.forEach(promotionArrays,function(promotionArray){
        promotionText += '名称：' + promotionArray.name +
        '，数量：' + promotionArray.num +
        promotionArray.unit + '\n';
      });
    }
  });
  return promotionText;
}

function getCountOfCart(){
  var promotions = loadPromotions();
  for(var i = 0; i < promotions.length; i++) {
    return promotions[i];
  }
}
