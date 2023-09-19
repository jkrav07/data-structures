var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


//////////////////////////////////////////////////////////////
  list.addToHead = function(value) { //O(1)
    let newNode = Node(value);


    if (list.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    list.head = newNode;
  };

  list.removeHead = function() { //O(1)
    //if list empty
    if (this.head === null) {
      return undefined;
    }
    //if there is only one node
    if (this.head.next === null) {
      let removedHead = this.head;
      this.head = null;
      return removedHead.value;
    }
    //if list has more than one node
    if (this.head !== null) {
      let removeHead = this.head;
      this.head = this.head.next;
      this.head.previous = null;
      return removeHead.value;
    }

  };

  list.addToTail = function(value) { //O(1)
    let newNode = Node(value);
    //
    if (this.tail !== null) {
      newNode.previous = this.tail;
      this.tail.next = newNode;
    }
    this.tail = newNode;
    //if list is empty
    if (this.head === null) {
      this.head = newNode;
    }
  };

  list.removeTail = function() { //O(1)
    if (this.tail !== null) {
      let removedTail = this.tail;
      this.tail = this.tail.previous;
      return removedTail.value;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
