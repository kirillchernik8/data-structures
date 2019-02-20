var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stack = Object.create(stackMethods)
  stack.storage = {};
  stack.top = 0;
  return stack;
};

stackMethods = {};

stackMethods.push = function(value) {

  this.storage[this.top] = value;
  this.top++;

}
stackMethods.pop = function() {
  if(this.top > 0) {
    let lastEl = this.storage[this.top-1];
    delete this.storage[this.top-1];
    this.top--;
    return lastEl;
  }
}
stackMethods.size = function() {
  return this.top;
}

