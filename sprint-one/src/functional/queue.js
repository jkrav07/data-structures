var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let tail = 0;
  let head = 0;

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    if (head < tail) {
      let firstString = storage[head];
      delete storage[head];
      head++;
      return firstString;
    } else {
      return;
    }

  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
