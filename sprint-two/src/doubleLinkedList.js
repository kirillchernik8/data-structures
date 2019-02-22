var DLinkedList = function (value) {
  var linkedList = {};
  linkedList.head = null;
  linkedList.tail = null;


  linkedList.addToTail = function (value) {   
    //create an instance of the node and set
    // its previouse value to be the current tail by default
    let newTail = Node(value);
    newTail.previous = linkedList.tail;

    //check if the tail exists in the list
     //.. basically, if the list exists
    if (!linkedList.tail) {
      //if it does not, create it
      linkedList.head = newTail;
      linkedList.tail = linkedList.head;

    } else {
      // otherwise make a tail to be the newTail variable
      linkedList.tail = newTail;
      //check  the length of the list and set the next values correspondingly
      if (linkedList.tail.previous === linkedList.head) {
        linkedList.head.next = linkedList.tail
      } else {
        linkedList.head.next = linkedList.head.next
      }
    }
  };   // O(1)


  linkedList.addToHead = function (value) {
    // check if the head does not exist 
    if (!linkedList.head) {
     // if true set the head and tail to poin to the same node
      linkedList.head = Node(value);
      linkedList.tail = linkedList.head;
    } else {
      // otherwise initiate the node and set the next and previouse correspondingly
      let newHead = Node(value)
      newHead.next = linkedList.head;
      linkedList.head.previous = newHead;
      linkedList.head = newHead;
    }
  };  // O(n)


  linkedList.removeTail = function () {
    // check if the tail exists
    if (linkedList.tail) {
      // store the previous value to a var for a reference
      let oneBeforeTail = linkedList.tail.previous;
      // point the tail to be this variable
      linkedList.tail = oneBeforeTail;
      // and delete it
      delete linkedList.tail.next;
    }
  }; // O(1)


  linkedList.removeHead = function () {
    // check if the head exists
    if (linkedList.head) {
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
      if (current.value === target) {
        // ... if it is
        return true;
      } else {
        // otherwise set the current to be the next
        current = current.next;
      }
    }
    return false;
  };


  return linkedList;
};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};
