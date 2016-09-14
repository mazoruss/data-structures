var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var addNode = Node(value);

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

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */