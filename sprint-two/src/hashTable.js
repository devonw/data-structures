

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._counter++;
  
  if (this._counter/this._limit > .75){
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    var self = this;
    this._storage.each(function(bucket){
      if (bucket) {
        bucket.forEach(function(keyValArray){
          self.insert(keyValArray[0], keyValArray[1]);
        })
      } 

    })
  }
  if (this._counter/this._limit < .25) {
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    var self = this;
    this._storage.each(function(bucket) {
      if (bucket) {
        bucket.forEach(function(keyValArray){
          self.insert(keyValArray[0], keyValArray[1]);
        })
      }
    })
    
    
    
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  this._storage.get(index).forEach(function(innerArray, ind, bucket){
    if(innerArray[0] === k) {
      bucket.splice(ind, 1);
    }
  })
  
  this._storage.get(index).push([k, v]);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index).length > 0) {
    return this._storage.get(index).find(function(innerArray) {
      return innerArray[0] === k;
    })[1]; 
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).forEach(function(innerArray, ind, collection) {
    if (innerArray[0] === k) {
      collection.splice(ind, 1);
    }
  });
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


