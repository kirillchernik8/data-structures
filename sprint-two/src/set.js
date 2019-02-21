var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  this._storage[item] = item;
};

setPrototype.contains = function (item) {
  return this._storage.hasOwnProperty(item)
};

setPrototype.remove = function (item) {
  delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?

   1) Add item is constant time as we only assigning the value of the item to the 
     current storage
   2) Contains is also constant as object[key] lookups are constant
   3) So is remove as we only delete the property of the object
   
 */