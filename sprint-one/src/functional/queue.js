var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var loc = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter - loc > 0) {
      loc++;
    }
    return storage[loc - 1];
  };

  someInstance.size = function() {
    return counter - loc;
  };

  return someInstance;
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


