var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};



HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a variable to store value of storage at given index 
  // ...if it is not there, assign an empty array
  let box = this._storage.get(index) || [];
  //traverse through the current box
  for (let i = 0 ; i < box.length; i++) {
    let tupple = box[i];
    // if 0th the value of the tuple stored at the current index 
    // matches a given key...
    if(tupple[0] === k){ 
      // save a 1st value to a variable to return it later
      let first = tupple[1];
      //reassign the 1st value to ne the given value
      tupple[1] = v;
      return first;
    };
  }
  // here we need to push key and value in form of a tupple to 
  // storage at current index and set it
  box.push([k, v]);
  this._storage.set(index, box);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // simillar logic as in insert in terms of creating the variable
  let box = this._storage.get(index) || [];
  // traverse through the created box
  for (let i = 0 ; i < box.length; i++) {
    var tupple = box[i];
    // if the 0th element matches the given key .. 
    if(tupple[0] === k){
      //return the 1st element
      return tupple[1];
    }}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let removed = this._storage[index];
  this._storage.set(index, undefined);
  return removed
};



/*
 * Complexity: What is the time complexity of the above functions?

   1) Insert: even though here we are relying on the
      helper functions (get and set with the constant lookup/assign time), the complexity of this method
      is linear. As k/v pairs are stored in tupples, we still need to traverse through this entries in 
      order to get the right value

    2) Same logic can be used to describe the retrieve method

    3) Remove is linear as well, getting the index to insert the value
       requires the for loop, and, therefore, the time complexity is O(n)
 */

