describe('linkedList', function() {
  var linkedList, dLinkedList;

  beforeEach(function() {
    linkedList = LinkedList();
    dLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList

  it('it should not break after a million operations', function() {
    for (var i = 0; i < 10000; i++) {
      linkedList.addToTail(i * 9 % 5);
    }

    for (var i = 0; i < 40; i++) {
      linkedList.removeHead();
      expect(linkedList.contains(i % 5)).to.equal(true);
    }

  });

  it('DLL should have a head and tail', function() {
    expect(dLinkedList).to.have.property('head');
    expect(dLinkedList).to.have.property('tail');
  });

  it('DLL should have methods named "addToTail", "removeHead", "addToHead", and "contains"', function() {
    expect(dLinkedList.addToTail).to.be.a('function');
    expect(dLinkedList.removeHead).to.be.a('function');
    expect(dLinkedList.contains).to.be.a('function');
  });

  it ('DLL should have a previous property', function() {
    dLinkedList.addToTail(4);
    expect(dLinkedList.tail.previous).to.equal(undefined);
    dLinkedList.addToTail(5);
    expect(dLinkedList.tail.previous.value).to.equal(4);
  });

  it ('DLL should be able to remove the head', function() {
    dLinkedList.addToTail(4);
    dLinkedList.addToTail(5);

    dLinkedList.removeHead();
    expect(dLinkedList.tail.previous).to.equal(null);
  }); 

  it('DLL should be able to addToHead', function() {
    dLinkedList.addToHead(5);
    expect(dLinkedList.head.value).to.equal(5);
    dLinkedList.addToHead(4);
    expect(dLinkedList.head.value).to.equal(4);
    expect(dLinkedList.head.next.value).to.equal(5);
    expect(dLinkedList.tail.value).to.equal(5);
    expect(dLinkedList.tail.previous.value).to.equal(4);
  });

  it('DLL should be able to addToTail', function() {
    dLinkedList.addToTail(4);
    expect(dLinkedList.tail.value).to.equal(4);
    expect(dLinkedList.head.value).to.equal(4);
    dLinkedList.addToTail(5);
    expect(dLinkedList.tail.value).to.equal(5);
    expect(dLinkedList.tail.previous.value).to.equal(4);
    expect(dLinkedList.head.value).to.equal(4);
    expect(dLinkedList.head.next.value).to.equal(5);
  });

  it('DLL should be able to remove tail', function() {
    // expect(dLinkedList.removeTail()).to.equal(null);
    dLinkedList.addToHead(4);
    expect(dLinkedList.removeTail()).to.equal(4);
    expect(dLinkedList.head).to.equal(null);
    expect(dLinkedList.tail).to.equal(null);
    dLinkedList.addToTail(5); // 
    dLinkedList.addToHead(4); // head: 4, tail: 5
    expect(dLinkedList.head.value).to.equal(4);
    expect(dLinkedList.tail.value).to.equal(5);
    dLinkedList.addToHead(3); // 3 => 4 => 5
    expect(dLinkedList.tail.previous.value).to.equal(4);
    dLinkedList.addToTail(6); // 3 => 4 => 5 => 6
    expect(dLinkedList.removeTail()).to.equal(6);
    expect(dLinkedList.tail.previous.value).to.equal(4);
    expect(dLinkedList.removeTail()).to.equal(5);
    expect(dLinkedList.removeTail()).to.equal(4);
  });



});
