var Stack = function() {
  let someInstance = {};
  someInstance.top = -1;
  someInstance.storage = {};
  extend(someInstance, stackMethods);

  return someInstance;
};


let extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
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
