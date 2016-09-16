

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    var bucket = [];
    this._storage.set(index, bucket);
  }

  var bucket = this._storage.get(index);
  var pair = [];
  pair.push(k);
  pair.push(v);

  bucket.push(pair);
  this._storage.set(index, bucket);
  this._size++;
  this.resize();
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  if (!this._storage.get(index)) {
    result = undefined;
  } else {
    this._storage.get(index).forEach(pair => {
      if (pair[0] === k) {
        result = pair[1];
      }
    });
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var size = this._size;

  if (!this._storage.get(index)) {
    return undefined;
  } else {
    this._storage.get(index).forEach((pair, i) => {
      if (pair[0] === k) {
        bucket.splice(i, 1);
        size--;
      }
    });
  }
  this._size = size;
  this.resize();
};

HashTable.prototype.resize = function() {
  var currLimit = this._limit; //8
  var newLimit = this._limit; //4
  var ratio = this._size / this._limit;


  if ((ratio) < 0.25) {
    newLimit = this._limit / 2;
  } else if ((ratio) >= 0.75) {
    newLimit = this._limit * 2; 
  }

  if (newLimit !== currLimit) {
    
    var tupleArr = [];
    var limitedArr = LimitedArray(newLimit);
    var hashTable = this;

    this._storage.each(function(bucket) {
      if (!!bucket) {
        bucket.forEach(pair => {
          tupleArr.push(pair);
        });
      }
    });

    this._storage = limitedArr;
    this._limit = newLimit;

    for (var i = 0; i < tupleArr.length; i++) {
      hashTable.insert(tupleArr[i][0], tupleArr[i][1]);
      this._size--;
    }
  } 
};




/*
 * Complexity: What is the time complexity of the above functions?
 */



