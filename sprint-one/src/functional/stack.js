var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let top = -1;

  // Implement the methods below
  someInstance.push = function(value) {
    top++;
    storage[top] = value;
  };

  someInstance.pop = function() {
    if (top > -1) {
      let topString = storage[top];
      delete storage[top];
      top--;
      return topString;
    }
  };

  someInstance.size = function() {
    return top + 1;
  };

  return someInstance;
};
