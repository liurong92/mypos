function CartItems(item,count){
  this.item = item;
  this.count =count;
}
CartItems.prototype.getItem = function(){
  return this.item;
};

CartItems.prototype.getCount = function(){
  return this.count;
};
