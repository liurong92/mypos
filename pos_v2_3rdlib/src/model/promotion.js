function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.prototype.getCartItem = function(cartItems) {
  var promotions = loadPromotions();

  var promotion = _.find(promotions,function(promotion) {
    return promotion;
  });
  console.log(promotion);
  _.forEach(promotion.barcodes, function(barcode) {
    if (cartItems.item.barcode === barcode &&
      promotion.type === 'BUY_TWO_GET_ONE_FREE') {
        return cartItems;
    }
  });
};

Promotion.prototype.getPromotionCount = function(cartItems) {
  var promotionCount = 0;
  // var cartItem = [];
  // var promotions = loadPromotions();
  //
  // var promotion = _.find(promotions,function(promotion) {
  //   return promotion;
  // });
  //
  // _.forEach(promotion.barcodes,function(barcode){
  //   if (cartItems.item.barcode === barcode &&
  //     promotion.type === 'BUY_TWO_GET_ONE_FREE') {
  //       promotionCount = cartItems.count;
  //     }
  //   });
  // return promotionCount;
  var cartItem = this.getCartItem(cartItems);
  promotionCount = cartItems.count;
  return promotionCount;
};

Promotion.prototype.getPromotionArray = function(cartItems) {
  var promotionArray = [];
  var promotions = loadPromotions();

  var promotion = _.find(promotions,function(promotion) {
    return promotion;
  });

  _.forEach(promotion.barcodes,function(barcode) {
  if (cartItems.item.barcode === barcode &&
    promotion.type === 'BUY_TWO_GET_ONE_FREE') {
      promotionArray.push({
        name: cartItems.item.name,
        num: parseInt(cartItems.count/3),
        unit: cartItems.item.unit,
        price: cartItems.item.price
      });
  }
  });
  return promotionArray;
};
