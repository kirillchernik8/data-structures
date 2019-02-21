var LinkedList = function () {
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function (value) {
    // 1) check if tail exists in the list
     // if it does not...
    if (!linkedList.tail) {
     // set a head of the list to be equal to instance of Node(value) [functional style]
      linkedList.head = Node(value);
      // tail of the list in this case will be equal to the head
      linkedList.tail = linkedList.head;
    } else {
      // otherwise ... 
         // set the [next] node to be an instance of Node(value)
      linkedList.tail.next = Node(value);
      //in this case the tail will be the next node from it
      linkedList.tail = linkedList.tail.next
    }
  };

  linkedList.removeHead = function () {
    // check if the head exists
    if(linkedList.head) {
      // if it does
      let val = linkedList.head.value;
      // set the current head to be [next] from previous head and return the previous
      linkedList.head = linkedList.head.next;
      return val;
    } else {
      return undefined;
    }
  };

  linkedList.contains = function (target) {
    // create a reference to the current node and set it to head at first step
    var current = linkedList.head;

    // while the list is not over [while there are 'next' values]
    while (current) {
      //check if current is target
      if(current.value === target){
        // ... if it is
        return true;
      } else {
        // otherwise set the current to be the next
        current = current.next;
      }
    }
    return false
  };


  return linkedList;
};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 1) addToTail - constant: we do not need to loop over any elements, we just check 
 the existance of the tail. Therefore it's O(1);

 2) removeHead - also constant. After the soft deletion of the head, we are just
 reassigning the head of the list to the next element. O(1);

 3) Contains - linear. Finding the target might take us to loop over every node
 in the list. Presense of the while loop is a good example of O(n) complexity;

 */

