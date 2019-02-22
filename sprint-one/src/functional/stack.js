var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Create a variable representing the current top of the stack 
  var top = 0;
  // Implement the methods below
  someInstance.push = function (value) {
    //here we only need to assing the topmost value to be equal to the value
    //and increment the top to keep the track of it : 
    storage[top] = value;
    top++
  };

  someInstance.pop = function () {
    // in order to pop the last element in a queue, we need to: 
    // 1) check if stack is bigger than 1 element; 
    // 2) update the current top 
    // 3) store the topmost element in a temporary var to reference it later;
    // 4) delete it  and return the popped element: 
    if (top > 0) {
      top--;
      var topMost = storage[top];
      delete storage[top];
      return topMost;
    };
  };

  someInstance.size = function () {
    // the top of the stack will represent the size of the stack by defalt
    return top;
  };
  
  return someInstance;
};

// +++ can use closures and refer to them within function - safety reasons 
// stack.push ('a') opposed to storage['bla'] = vbal
// therefore limiting how much other developers can do about this structure / mess up

// --- methods for each instance --> space complexity++