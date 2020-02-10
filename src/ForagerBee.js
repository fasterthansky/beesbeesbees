var ForagerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  this.color;
  this.canFly = true;
  this.food;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.eat = function() {
};

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};