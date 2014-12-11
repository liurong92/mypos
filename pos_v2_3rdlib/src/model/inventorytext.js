function InventoryText(cartItems){
  this.cartItems = cartItems;
}
InventoryText.prototype.getInventoryText = function(){
  cartItems = this.cartItems;
  var findalltext = new FindAllText(cartItems);
  return '***<没钱赚商店>购物清单***\n' +
         '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
         '----------------------\n' +
         findalltext.getCartItemsText(cartItems) +
         '----------------------\n' +
         '挥泪赠送商品：\n' +
         findalltext.getPromotionText(cartItems) +
         '----------------------\n' +
         findalltext.getSummaryText(cartItems) +
         '**********************';
};
