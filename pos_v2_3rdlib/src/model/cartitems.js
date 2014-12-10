function CartItems(item,count){
  this.item = item;
  this.count =count;
}
CartItems.prototype.setItem = function(item){
  this.item = item;
}
CartItems.prototype.getItem = function(){
  return this.item;
}
CartItems.prototype.setCount = function(count){
  this.count = count;
}
CartItems.prototype.getCount = function(count){
  return this.count;
}
