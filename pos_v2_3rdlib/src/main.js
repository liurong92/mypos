function printInventory(tags){
  var scannerTags = new ScannerTags(tags);
  var inventoryText = new InventoryText(scannerTags.splitTags());
  console.log(inventoryText.getInventoryText());
}
