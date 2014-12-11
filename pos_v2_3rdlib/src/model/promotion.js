function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}


Promotion.prototype.getPromotionCount = function(cartItems) {
  var promotionCount = 0;
  var promotions = _.find(loadPromotions(),function(loadPromotion){
    return loadPromotion;
  });

  _.forEach(promotions.barcodes,function(barcode){
    if (cartItems.item.barcode === barcode &&
      promotions.type === 'BUY_TWO_GET_ONE_FREE') {
        promotionCount = cartItems.count;
      }
    });
  return promotionCount;
};

Promotion.prototype.getPromotionArray = function(cartItems) {
  var promotionArray = [];
  var promotions = _.find(loadPromotions(),function(loadPromotion){
    return loadPromotion;
  });

  _.forEach(promotions.barcodes,function(barcode){
  if (cartItems.item.barcode === barcode &&
    promotions.type === 'BUY_TWO_GET_ONE_FREE') {
      promotionArray.push({name: cartItems.item.name,
                    num: parseInt(cartItems.count/3),
                    unit: cartItems.item.unit,
                    price: cartItems.item.price});
        }
    });
  return promotionArray;
};
