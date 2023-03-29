var Queue = function() {
  this.tail = 0;
  this.head = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  if (this.head < this.tail) {
    let firstString = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return firstString;
  } else {
    return;
  }
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};

