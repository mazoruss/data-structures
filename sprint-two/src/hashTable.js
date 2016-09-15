

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v;
  var stored = false;

  if (!!this._storage.get(index) && !this._storage.get(index).hasOwnProperty(k)) {
    for (var i = 0; i < this._limit; i++) {
      if (!this._storage.get(i) && stored === false) {
        this._storage.set(i, obj);
        stored = true;
      }
    }
  } else {
    this._storage.set(index, obj);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;

  if (this._storage.get(index) !== undefined) {
    if (!this._storage.get(index).hasOwnProperty(k)) {
      for (var i = 0; i < this._limit; i++) {
        if (!!this._storage.get(i) && this._storage.get(i).hasOwnProperty(k)) {
          result = this._storage.get(i)[k];
        }
      }
    } else {
      result = this._storage.get(index)[k];
    }
  } else {
    result = undefined;
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(this._storage.get(index)[k]);
  this._storage.set(index, undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


