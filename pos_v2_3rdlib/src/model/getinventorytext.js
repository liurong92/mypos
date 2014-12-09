function getInventoryText(cartItems){
  this.cartItems = cartItems;
  var cartItemText = getCartItemsText(cartItems);
  var promotionText = getPromotionText(cartItems);
  var summaryText = getSummaryText(cartItems);
  var formattedDateString = getDate();
  var inventoryText ='***<没钱赚商店>购物清单***\n' +
                     '打印时间：' + formattedDateString + '\n' +
                     '----------------------\n' +
                     cartItemText +
                     '----------------------\n' +
                     '挥泪赠送商品：\n' +
                     promotionText +
                     '----------------------\n' +
                     summaryText +
                     '**********************';
  return inventoryText;
}
