var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let tailPosition = 0;
  let headPosition = 0;

  someInstance.enqueue = function(value) {
    storage[tailPosition] = value;
    tailPosition++;
  };

  someInstance.dequeue = function() {
    let firstString = storage[headPosition];
    delete storage[headPosition];
    headPosition++;
    return firstString;
  };

  someInstance.size = function() {
    let sizeCounter = 0;
    for (let prop in storage) {
      sizeCounter++;
    }
    return sizeCounter;
  };

  return someInstance;
};
