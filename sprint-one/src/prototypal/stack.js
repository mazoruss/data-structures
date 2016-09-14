var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.counter = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  size: function() {
    return this.counter;
  },

  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    if (this.counter > 0) {
      this.counter--;
    }
    return this.storage[this.counter];
  }
};


