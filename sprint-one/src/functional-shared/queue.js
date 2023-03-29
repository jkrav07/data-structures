var Queue = function() {
  let someInstance = {};
  someInstance.tail = 0;
  someInstance.head = 0;
  someInstance.storage = {};

  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  if (this.head < this.tail) {
    let firstString = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return firstString;
  } else {
    return;
  }

};

queueMethods.size = function() {
  return this.tail - this.head;
};
