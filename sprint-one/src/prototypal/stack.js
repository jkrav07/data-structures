var Stack = function() {
  let someInstance = Object.create(stackMethods);
  someInstance.top = -1;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.top++;
  debugger;
  this.storage[this.top] = value;
};

stackMethods.pop = function() {
  if (this.top > -1) {
    let topString = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return topString;
  }
};

stackMethods.size = function() {
  return this.top + 1;
};


