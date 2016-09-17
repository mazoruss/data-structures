var BloomFilter = function(limit) {
  var instance = {};
  instance.limit = limit;
  instance.storage = {};
  instance.magic1 = 123;
  instance.magic2 = 457;
  instance.magic3 = 351;
  instance.insert = BloomFilter.insert;
  instance.isHere = BloomFilter.isHere;
  instance.getProb = BloomFilter.getProb;
  instance.hash = BloomFilter.hash;
  return instance;
};

BloomFilter.insert = function(string) {
  var key1 = this.hash(string, this.magic1);
  var key2 = this.hash(string, this.magic2);
  var key3 = this.hash(string, this.magic3);
  this.storage[key1] = true;
  this.storage[key2] = true;
  this.storage[key3] = true;
};

BloomFilter.isHere = function(string) {
  var key1 = this.hash(string, this.magic1);
  var key2 = this.hash(string, this.magic2);
  var key3 = this.hash(string, this.magic3);
  return !!this.storage[key1] && !!this.storage[key2] && !!this.storage[key3];
};

BloomFilter.getProb = function() {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return (size / this.limit * 100) + '%';
};

BloomFilter.hash = function(string, magicNum) {
  //string.charCodeAt(i)
  var key = 0;
  for (var i = 0; i < string.length; i++) {
    key += string.charCodeAt(i) * magicNum; 
  }
  key = key % this.limit;
  return key;
};


var magic = BloomFilter(18);
magic.insert('hello');
magic.insert('why');
magic.insert('hi');
magic.insert('bad');
console.log(magic.getProb());
console.log(magic.isHere('hello'));
console.log(magic.isHere('bye'));

