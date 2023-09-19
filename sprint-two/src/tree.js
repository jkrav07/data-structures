var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { //O(1)
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  let contains = false;
  // eslint-disable-next-line func-style
  function treeContains(obj) {
    // if (obj.children.length < 1) {
    //   return 0;
    // }
    if ( obj.value === target) {
      contains = true;
      return;
    } else {

      for (let i = 0; i < obj.children.length; i++) { //?O(n)
        //console.log(obj);
        let node = obj.children[i];
        treeContains(node);
      }
    }
    return contains;
  }
  treeContains(this);
  return contains;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
