class Queue {
  constructor() {
    this.tail = 0;
    this.head = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.head < this.tail) {
      let firstString = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return firstString;
    } else {
      return;
    }
  }

  size() {
    return this.tail - this.head;
  }

}
