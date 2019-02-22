var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  newTree.parent = null;

  extend(newTree, treeMethods)
  return newTree;
};

const extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  // since 'children' is an array, we can simply 'push' a 
  //new instance of the tree to this array;
  this.children.push(Tree(value))
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].parent = this
  }
};

treeMethods.removeFromParent = function (val) {
  // create a recursive function
  function recurseToFindKid(current) {
    // create a base case: if looking for root return the error
    if (current.value === val) {
      return ('cannot remove the root');
    } else {
      // otherwise traverse though all the children 
      current.children.forEach((kid) => {
        // store copy of the child;
        let siblings = kid.parent.children = kid;
        // and set the parent to null; 
        siblings.parent = null;
      })
    }
  }
  recurseToFindKid(this)
}

treeMethods.contains = function (target) {
  // here we might use recursion to solve the prompt
  var occurances = [];
  //create a recursive function 
  var recurse = function (element) {
    // base case is if the root is equal to the target
    if (element.value === target) {
      occurances.push(element.value)
    };
    // for each child of the root
    //run the recursive function 
    for (let i = 0; i < element.children.length; i++) {
      let child = element.children[i];
      recurse(child);
    }
  };
  recurse(this);
  // check if there was at least one occurance of the target
  return occurances.length >= 1;
};


/*
 * Complexity: What is the time complexity of the above functions?

  1) addChild is O(1) as we only need to push the new tree into an array.

  2) contains, on contrary, is Linear O(n) as in the worst case scenario we have
     to go through each element in the tree.
 
  3) removeFromParent is of O(n log(n)) complexity as it involves a linear 
     function inside the recursive one.
 */
