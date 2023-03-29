class Stack {
  constructor() {
    this.top = -1;
    this.storage = {};
  }

  push(value) {
    this.top++;
    this.storage[this.top] = value;
  }

  pop() {
    if (this.top > -1) {
      let topString = this.storage[this.top];
      delete this.storage[this.top];
      this.top--;
      return topString;
    }
  }

  size() {
    return this.top + 1;
  }

}