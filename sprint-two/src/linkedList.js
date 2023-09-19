var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //O(1)
    let newNode = Node(value);
    if ( list.tail !== null) {
      this.tail.next = newNode;
    }
    list.tail = newNode;
    if (list.head === null) {
      this.head = newNode;
    }
  };

  list.removeHead = function() { //O(1)
    if (this.head !== null) {
      let removeHead = this.head;
      this.head = this.head.next;
      return removeHead.value;
    } else {
      return undefined;
    }

  };

  list.contains = function(target) { //O(n)
    for (let node = this.head; node !== null; node = node.next) {
      if ( node.value === target ) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
