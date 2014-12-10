function printInventory(tags){
  var findCartItems = new FindCartItems(tags);
  var cartItems = findCartItems.getCartItems();
  var inventoryText = new InventoryText(cartItems);
  var inventorytext = inventoryText.getInventoryText();
  console.log(inventorytext);
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

// function getCartItemsText(cartItems) {
//   var cartItemsText = '';
//   _.forEach(cartItems,function(cartItem){
//     var promotionCount = getPromotionCount(cartItem);
//     var proCount = parseInt(promotionCount/3);
//     var subtotal = 0;
//     item = cartItem.item;
//     count = cartItem.count;
//
//     if (proCount > 0) {
//       subtotal = (count - proCount) * item.price;
//     } else {
//       subtotal = count * item.price;
//     }
//     cartItemsText += '名称：' + item.name +
//     '，数量：' +count + item.unit +
//     '，单价：' +item.price.toFixed(2) +
//     '(元)，小计：' +subtotal.toFixed(2) +
//     '(元)\n';
//   });
//   return cartItemsText;
// }

function getCountOfCart(){
  var promotions = loadPromotions();
  for(var i = 0; i < promotions.length; i++) {
    return promotions[i];
  }
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

function getPromotionText(cartItems) {
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
