var Stack = function() {
  this.top = -1;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
};

Stack.prototype.pop = function() {
  if (this.top > -1) {
    let topString = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return topString;
  }
};

Stack.prototype.size = function() {
  return this.top + 1;
};

