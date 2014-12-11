function printInventory(tags){
  var findCartItems = new FindCartItems(tags);
  var cartItems = findCartItems.getCartItems();
  var inventoryText = new InventoryText(cartItems);
  var inventorytext = inventoryText.getInventoryText();
  console.log(inventorytext);
}
