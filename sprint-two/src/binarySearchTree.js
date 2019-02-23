var BinarySearchTree = function (value) {
  let binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.childNodes = [];
  return binaryTree;
};

let binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {
  // create a recursive function 
  function recurse(onNode) {
    // here we would need two base cases as it is a binary tree, so there are two 
    // possible directions to move in
    // 1. If the current node value is greater than a given one and 
    //     the node does not have a left child
    if (onNode.value > value && onNode.left === null) {
      onNode.left = BinarySearchTree(value);
      onNode.childNodes.push(onNode.left);
      // 2. And if the current value is less than...
      //    ... and does not have a right child

    } else if (onNode.value < value && onNode.right === null) {
      onNode.right = BinarySearchTree(value);
      onNode.childNodes.push(onNode.right);
      // otherwise (if the node has two children alerady)...
    } else if (onNode.value > value) {
      recurse(onNode.left);
    } else if (onNode.value < value) {
      recurse(onNode.right);
    }
  }
  recurse(this);
};



binaryTreeMethods.contains = function (target) {
  // create a recursive function 
  function reccurseToFind(currentNode) {
    // if current node is target ....
    if (currentNode.value === target) {
      return true;
    } else {
      // otherwise go left or right dependning on the value
      if (currentNode.value > target && currentNode.left) {
        currentNode = currentNode.left;
        return reccurseToFind(currentNode);
      } else if (currentNode.value < target && currentNode.right) {
        currentNode = currentNode.right;
        return reccurseToFind(currentNode);
      } else {
        return false
      }
    }
  }
  return reccurseToFind(this)
};



binaryTreeMethods.depthFirstLog = function (cb) {
  function recurseToMap(currentNode) {
    if (currentNode.value !== null) {
      cb(currentNode.value);
    }
    if (currentNode.childNodes.length > 0) {
      currentNode.childNodes.forEach(kid => recurseToMap(kid));
    }
  }
  recurseToMap(this);
};

binaryTreeMethods.breadthFirstLog = function () {
  let result = [];
  result.push(this.value)
  function recurse(onNode) {
    if (onNode.left !== null && onNode.right !== null) {
      result.push(onNode.childNodes[0].value, onNode.childNodes[1].value)
    }
    
    if (onNode.childNodes.length > 0) {
      onNode.childNodes.forEach(kid => recurse(kid))
    }
  }
  recurse(this);
  return result;
}



// recursiveLog(this)
// return result
// }
/*
 * Complexity: What is the time complexity of the above functions?

   In my implementation of these methods, evvery method uses the recursion, 
   therefore, the time complexity for all of them if Logarithmic. O(log(n))

 */