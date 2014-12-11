function InventoryText(cartItems){
  this.cartItems = cartItems;
}
InventoryText.prototype.getInventoryText = function(){
  cartItems = this.cartItems;
  var kindText = new KindText(cartItems);
  return '***<没钱赚商店>购物清单***\n' +
         '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
         '----------------------\n' +
         kindText.getCartItemsText(cartItems) +
         '----------------------\n' +
         '挥泪赠送商品：\n' +
         kindText.getPromotionText(cartItems) +
         '----------------------\n' +
         kindText.getSummaryText(cartItems) +
         '**********************';
};
