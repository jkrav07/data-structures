var BinarySearchTree = function(value) {
  let node = {};
  node.value = value;
  node.left = null; //node obj(BinarySearchTree(val))
  node.right = null;
  _.extend(node, prototype);
  return node;

};

let prototype = {};

prototype.insert = function (value) {
  // console.log(this.contains(value));
  // if (this.contains(value) === true) {
  //   return 'Value Already Exists';
  // }
  let node = this;
  let nodeFound = false;
  while (nodeFound === false) {
    if (value === node.value) {

    }
    if (value < node.value) {
      if (node.left === null) {
        node.left = BinarySearchTree(value);
        nodeFound = true;
      }
      node = node.left;
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = BinarySearchTree(value);
        nodeFound = true;
      }
      node = node.right;
    } else if (value === node.value) {
      nodeFound = true;
    }
  }
};

prototype.contains = function (value) {
  let node = this;
  let contains = false;
  while (node !== null && contains === false) {
    if (node.value === value) {
      contains = true;
    } else {
      if (value < node.value) {
        node = node.left;
      }
      if (value > node.value) {
        node = node.right;
      }
    }
  }
  return contains;
};

prototype.depthFirstLog = function(cb) {
  let root = this;
  let applyCallback = function(node) {
    cb(node.value);
    if (node.left !== null) {
      applyCallback(node.left);
    }
    if (node.right !== null) {
      applyCallback(node.right);
    }
  };
  applyCallback(root);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
