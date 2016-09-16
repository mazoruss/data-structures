var Tree = function(value, parent) {
  var newTree = Object.create(treeMethods);

  newTree.value = value;
  newTree.children = null;
  newTree.parent = parent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (!this.children) {
    var childArr = [];
    var node = Tree(value, this);
    childArr.push(node);
    this.children = childArr;
  } else {
    var node = Tree(value, this);
    this.children.push(node);
  }
};

treeMethods.contains = function(target) {
  var result = false;
  var traverse = function(node) {
    node.value === target ? result = true : null;
    node.children ? node.children.forEach(x  => traverse(x)) : null;
  };
  traverse(this);
  return result;
};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};

treeMethods.traverse = function(callback) {
  callback(this);
  // for each item in child, call traverse on it
  if (!!this.children) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(callback);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
