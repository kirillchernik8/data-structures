var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.top = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  if (!this.contains(item)) {
    this._storage[this.top] = item;
    this.top++;
  }
}

setPrototype.contains = function (item) {
  let isItThere = false
  for (let i = 0; i < Object.values(this._storage).length; i++) {
    if (Object.values(this._storage)[i] === item) {
      isItThere = true;
    }
  }
  return isItThere;
};

setPrototype.remove = function (item) {
  for (let key in this._storage) {
    if (this._storage[key] === item) {
      delete this._storage[key]
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

   1) Add item is linear as it relies on the contains method. O(n)     current storage
   2) Contains is linear as it involves traversal over the values of the Object. O(n)
   3) Remove is linera as we need to traverse thru the storage to get the element; 
   
 */

let set1 = Set()
set1.add('asd')
set1.add(2)
let blop = {
  a: 2,
  b: 5
}
let blop1 = {
  a: 2,
  b: 7
}
set1.add(blop)
set1.add(blop1)
set1.add(3)
set1.add(3)
set1.add(3)
set1.remove(3)
set1.add('Susan Sarandon')
set1.add('Danny Glover');


console.log(set1.contains('Danny Glover'))
let cat = function (x) {
  return x
}
set1.add(cat)
set1.add(true)
console.log(set1)