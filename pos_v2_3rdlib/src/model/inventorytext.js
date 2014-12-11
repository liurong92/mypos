function InventoryText(cartItems){
  this.cartItems = cartItems;
}
InventoryText.prototype.getInventoryText = function(){
  cartItems = this.cartItems;
  var findalltext = new FindAllText(cartItems);
  var inventoryText ='***<没钱赚商店>购物清单***\n' +
                     '打印时间：' + GetTime() + '\n' +
                     '----------------------\n' +
                     findalltext.getCartItemsText(cartItems) +
                     '----------------------\n' +
                     '挥泪赠送商品：\n' +
                     findalltext.getPromotionText(cartItems) +
                     '----------------------\n' +
                     findalltext.getSummaryText(cartItems) +
                     '**********************';
  return inventoryText;
};
