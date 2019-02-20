var Queue = function () {
  var someInstance = {};

  // create variables for tracking the bottom and the top of queue
  var top = 0;
  var bottom = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    //enqueue has the same logic as the stack push, therefore:
    storage[top] = value;
    top++;
  };

  someInstance.dequeue = function () {
    // here the first thing we should check for is
      // whether or not the queue has any elements in it --->
    if(top > bottom) {
      var theBottomElement = storage[bottom]
      delete storage[bottom]
      bottom++;
      return theBottomElement
    }
  };

  someInstance.size = function () {
    //unlike in the stack, here we should be calculatin the size of the queue 
    //depending on the difference between the current top and current bottom
    return top - bottom; 
  };

  return someInstance;
};