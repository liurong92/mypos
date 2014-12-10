function printInventory(tags){
  var findCartItems = new FindCartItems(tags);
  var cartItems = findCartItems.getCartItems();
  var inventoryText = new InventoryText(cartItems);
  var inventorytext = inventoryText.getInventoryText();
  console.log(inventorytext);
}

function getPromotionCount(cartItems) {
  var promotionCount = 0;
  var promotions = getCountOfCart();
  _.forEach(promotions.barcodes,function(barcode){
    if (cartItems.item.barcode === barcode &&
      promotions.type === 'BUY_TWO_GET_ONE_FREE') {
        promotionCount = cartItems.count;
      }
    });
    return promotionCount;
}

function getPromotionArray(cartItems) {
  var promotionArray = [];
  var promotions = getCountOfCart();
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
}

function getPromotionTotal(cartItems){
  var promotionTotal = 0;
  var promotionArray = [];
  _.forEach(cartItems,function(cartItem){
    promotionArrays = getPromotionArray(cartItem);
    if(promotionArrays.length > 0) {
      _.forEach(promotionArrays,function(promotionArray){
        promotionTotal += promotionArray.price * promotionArray.num;
      });
    }
  });
  return promotionTotal;
}

function getAllTotal(cartItems){
  var allTotal = 0;
  _.forEach(cartItems,function(cartItem){
    allTotal += cartItem.item.price * cartItem.count;
  });
  return allTotal;
}

function getCountOfCart(){
  var promotions = loadPromotions();
  for(var i = 0; i < promotions.length; i++) {
    return promotions[i];
  }
}

function getSummaryText(cartItems) {
  var summaryText = '';
  var sum = 0;
  var allTotal = getAllTotal(cartItems);
  var promotionTotal = getPromotionTotal(cartItems);
  sum = allTotal - promotionTotal;
  summaryText +='总计：' + sum.toFixed(2) +
                '(元)\n' +
                '节省：' + promotionTotal.toFixed(2) +
                '(元)\n';
  return summaryText;
}
