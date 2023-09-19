

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //collection
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) { //close to O(1)
  //Check for storage size
  if (this._counter / this._limit >= 0.75) {
    this._limit *= 2;
    //create new LimitedArray obj and attach it to avariable
    let newStorage = LimitedArray(this._limit);
    //loop over existing _storage using each and get k
    this._storage.each((bucket, i, storage) => {
      if (bucket !== undefined) {
        bucket.forEach((tuple, iTuple) => {
          let newIndex = getIndexBelowMaxForKey(tuple[0], this._limit);
          let newBucket = [[tuple[0], tuple[1]]];
          //newBucket.push(tuple[0], tuple[1]);
          newStorage.set(newIndex, newBucket);
        });
      }
    });
    this._storage = newStorage;
    //create new index to k in the new storage
    //set the new index:v pair in the nex storage
    //reasign this._storage to new storage;
  }
  let kAlreadyPresent = false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = [];
  if (this._storage.get(index) === undefined) {
    bucket.push([k, v]);
    this._storage.set(index, bucket);

  } else {
    //let kAlreadyPresent = false;
    this._storage.get(index).forEach(truple => {
      if (truple[0] === k) {
        truple[1] = v;
        kAlreadyPresent = true;
      }
    });
    if (kAlreadyPresent === false) {
      let exisitingBucket = this._storage.get(index);
      exisitingBucket.push([k, v]);
    }
  }
  this._counter++;
};

HashTable.prototype.retrieve = function(k) { //close to O(1)
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index); //array
  if (bucket === undefined) {
    return undefined;
  }
  if (bucket !== undefined) {
    let retrievedValue;
    bucket.forEach(subArray => {
      if (subArray[0] === k) {
        retrievedValue = subArray[1];
      }
    });
    return retrievedValue;
  }
};

HashTable.prototype.remove = function(k) { //close to O(1)
  if (this._counter / this._limit <= 0.25) {
    this._limit /= 2;
    //create new LimitedArray obj and attach it to avariable
    let newStorage = LimitedArray(this._limit);
    //loop over existing _storage using each and get k
    this._storage.each((bucket, i, storage) => {
      if (bucket !== undefined) {
        bucket.forEach((tuple, iTuple) => {
          let newIndex = getIndexBelowMaxForKey(tuple[0], this._limit);
          let newBucket = [[tuple[0], tuple[1]]];
          //newBucket.push(tuple[0], tuple[1]);
          newStorage.set(newIndex, newBucket);
        });
      }
    });
    this._storage = newStorage;
    //create new index to k in the new storage
    //set the new index:v pair in the nex storage
    //reasign this._storage to new storage;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined ) {
    return undefined;
  }
  let bucketOI = this._storage.get(index); //array
  bucketOI.forEach((subArray, i) => {
    if (subArray[0] === k) {
      bucketOI.splice(i, 1);
    }
  });
  this._counter--;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


