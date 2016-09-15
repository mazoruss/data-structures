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
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
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
  console.log(callback);
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
