function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.prototype.getPromotionCount = function(cartItems) {
  var promotionCount = 0;
  var cartItem = [];
  var promotions = loadPromotions();

  var promotion = _.find(promotions,function(promotion) {
    return promotion;
  });

  _.forEach(promotion.barcodes,function(barcode){
    if (cartItems.item.barcode === barcode &&
      promotion.type === 'BUY_TWO_GET_ONE_FREE') {
        promotionCount = cartItems.count;
      }
    });
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
        name: cartItems.getItem().name,
        num: parseInt(cartItems.getCount()/3),
        unit: cartItems.getItem().unit,
        price: cartItems.getItem().price
      });
  }
  });
  return promotionArray;
};
