describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should log nodes in a breadth first approach', function() {
    var number = [4, 12, 2, 6, 10, 14, 1, 3, 5, 7];
    number.forEach( x => binarySearchTree.insert(x));
    expect(binarySearchTree.breadthFirstLog()).to.eql([5, 4, 12, 2, 6, 14, 1, 3, 10, 7]);
  });

  it('should be able to find unbalanced tree', function() {
    var number = [4, 12, 2, 6, 10, 14, 1, 3, 5, 7];
    number.forEach( x => binarySearchTree.insert(x));
    expect(binarySearchTree.unbalanced()).to.equal(false);
    binarySearchTree.insert(8);
    expect(binarySearchTree.unbalanced()).to.equal(false);
    binarySearchTree.insert(9);
    expect(binarySearchTree.unbalanced()).to.equal(true);
  });

  it('should be able to balance itself', function() {
    var number = [4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 8, 9];
    // var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    number.forEach( x => binarySearchTree.insert(x));
    // console.log(binarySearchTree.rearrange());
    // console.log(binarySearchTree.balanceSelf());
    console.log(binarySearchTree);
    // console.log(binarySearchTree);
    // expect(binarySearchTree.balanceSelf()).to.equal(true);

  });
});
