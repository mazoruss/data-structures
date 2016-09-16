var Queue = function() {

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var instance = {};
  
  instance.storage = {};
  instance.counter = 0;
  instance.loc = 0;

  instance.size = queueMethods.size;
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;

  return instance;
};

var queueMethods = {
  size: function() {
    return this.counter - this.loc;
  },

  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++; 
  },

  dequeue: function() {
    if (this.size() > 0) {
      this.loc++;
      return this.storage[this.loc - 1];
    }
  }

};


var queues = [];

var loop = function() {
  for (var i = 0; i < 1000000; i++) {
    var x = Queue();
    queues.push(x);
  }
};

loop();

console.log(queues);




