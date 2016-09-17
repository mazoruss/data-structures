describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it ('should handle numbers too', function() {
    set.add(2);
    expect(set.contains(2)).to.equal(true);
    set.add(1);
    set.remove(2);
    expect(set.contains(2)).to.equal(false);
  });

  it ('should handle input objects of any type', function() {
    var thing1 = { firstname: "hello", lastname: "hi"};
    var thing2 = { firstname: "bye", lastname: "byebye"};
    set.add(thing1);
    set.add(thing2);
    expect(set.contains(thing1)).to.equal(true);
    expect(set.contains(thing2)).to.equal(true);
    set.remove(thing2);
    expect(set.contains(thing2)).to.equal(false);
  });

});
