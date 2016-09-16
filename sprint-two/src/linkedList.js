var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    var addNode = Node(value);
    if (!!this.tail) {
      addNode.previous = this.tail;
    }

    if (!list.head) {
      list.head = addNode;
      list.tail = list.head;
    } else {
      list.tail.next = addNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var result = list.head.value;
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else if (list.head.next) {
      list.head.next.previous = null;
      list.head = list.head.next;
    }
    return result;
  };

  list.contains = function(target) {
    var currentNode = list.head;

    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };
  
  return list;
};

var Node = function(value, previous) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = previous;

  return node;
};

var DoublyLinkedList = function() {
  var proto = LinkedList();
  var instance = Object.create(proto);

  instance.addToHead = function(value) {
    var node = Node(value);

    if (!this.__proto__.head) {
      this.__proto__.head = node;
      this.__proto__.tail = node;
    } else {                           
      this.__proto__.head.previous = node;      //set node to be old head's previous property
      node.next = this.__proto__.head;          // set old head to this node's next property
      this.__proto__.head = node;               // set node to become head
    }
  };

  instance.removeTail = function() {
    if (!this.__proto__.tail) {
      return null;
    }

    var result = this.__proto__.tail.value;
    //console.log(this.tail.value);
    if (this.__proto__.head === this.__proto__.tail) {
      this.__proto__.head = null;
      this.__proto__.tail = null;
    } else {
      this.__proto__.tail = this.__proto__.tail.previous;
      this.__proto__.tail.next = null;
    }
    return result;
  };

  return instance;
};







/*
 * Complexity: What is the time complexity of the above functions?
 */
