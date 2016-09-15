var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (!this.children) {
    var childArr = [];
    var node = Tree(value);
    childArr.push(node);
    this.children = childArr;
  } else {
    var node = Tree(value);
    this.children.push(node);
  }
};

treeMethods.contains = function(target) {
  var result = false;

  var traverse = function(node) {
    if (node.value === target) {
      result = true;
    } 

    if (node.children) {
      node.children.forEach(x => traverse(x));
    }
  };
  traverse(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
