var BinarySearchTree = function(value) {
  var instance = Object.create(BSTMethods);
  instance.left = null;
  instance.right = null;
  instance.value = value;
  return instance;
};

var BSTMethods = {};
BSTMethods.insert = function(value) {
  if (value > this.value) {
    !this.right ?
      this.right = new BinarySearchTree(value) :
      this.right.insert(value);
  } else if (value < this.value) {
    !this.left ? 
      this.left = new BinarySearchTree(value) :
      this.left.insert(value);
  }
  if (this.unbalanced()) {
    this.finalForm();
  }
};

BSTMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }
};

BSTMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

BSTMethods.breadthFirstLog = function() {
  var result = [];
  result.push(this);
  index = 0;

  while (!!result[index]) {
    // console.log(result[index]);
    !!result[index].left ? result.push(result[index].left) : null;
    !!result[index].right ? result.push(result[index].right) : null;
    result[index] = result[index].value;
    index++;
  }

  return result;
};

BSTMethods.switchHead = function(node) {
  this.value = node.value;
  this.left = node.left;
  this.right = node.right;
};

BSTMethods.unbalanced = function() {
  var result = [];
  var dig = function(node, index) {
    var depth = index;
    node.left ? dig(node.left, depth + 1) : null;
    node.right ? dig(node.right, depth + 1) : null;

    if (!node.left && !node.right) {
      result.push(depth);
    }
  };
  if (!this.left && !this.right) {
    result.push(1);
  }
  dig(this, 1);
  result.sort();
  return result[result.length - 1] - result[0] > result[0];
};

BSTMethods.finalForm = function() {
  var list = this.rearrange();
  this.value = list[0];
  this.left = null;
  this.right = null;
  for (var i = 1; i < list.length; i++) {
    this.insert(list[i]);
  }
};

BSTMethods.rearrange = function() {
  var balanced = this.balanceSelf();
  return balanced.breadthFirstLog();
};

BSTMethods.flatten = function() {
  var result = [];
  var dig = function(node) {
    node.left ? dig(node.left) : null;
    result.push(node);
    node.right ? dig(node.right) : null;
  };
  dig(this);
  return result;
};


BSTMethods.balanceSelf = function() {
  var array = this.flatten();
  var getMid = function(array) {
    if (array.length === 0) {
      return null;
    } else if (array.length === 1) {
      var center = array[0];
      center.left = null;
      center.right = null;
      return center;
    } else {
      var mid = Math.floor(array.length / 2);
      var center = array[mid];

      var half1 = array.slice(0, mid);
      center.left = getMid(half1);
      
      var half2 = array.slice(mid + 1, array.length);      
      center.right = getMid(half2);
      return center;
    }
  };
  var balanced = getMid(array);
  return balanced;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
