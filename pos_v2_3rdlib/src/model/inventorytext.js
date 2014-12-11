function InventoryText(cartItems){
  this.cartItems = cartItems;
}
InventoryText.prototype.getInventoryText = function(){
  cartItems = this.cartItems;
  var findalltext = new FindAllText(cartItems);
  var cartItemText = findalltext.getCartItemsText();
  var promotionText = findalltext.getPromotionText();
  var summaryText = findalltext.getSummaryText(cartItems);
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

function getDate(){
  dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
  };
  var formattedDateString = '';
  var currentDate = new Date(),
  year = dateDigitToString(currentDate.getFullYear()),
  month = dateDigitToString(currentDate.getMonth() + 1),
  date = dateDigitToString(currentDate.getDate()),
  hour = dateDigitToString(currentDate.getHours()),
  minute = dateDigitToString(currentDate.getMinutes()),
  second = dateDigitToString(currentDate.getSeconds()),
  formattedDateString = year + '年' +
                        month + '月' +
                        date + '日 ' +
                        hour + ':' +
                        minute + ':' + second;
  return formattedDateString;
}
