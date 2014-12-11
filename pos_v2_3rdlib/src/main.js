function printInventory(tags){
  var findCartItems = new FindCartItems(tags);
  var inventoryText = new InventoryText(findCartItems.getCartItems());
  console.log(inventoryText.getInventoryText());
}
