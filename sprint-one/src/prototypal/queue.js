var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let queue = Object.create(queueMethods);
  queue.storage = {};
  queue.top = 0;
  queue.bottom = 0;

  return queue;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top++;
}; 

queueMethods.dequeue = function() {
  if( this.top > this.bottom) {
    let last = this.storage[this.bottom];
    delete this.storage[this.bottom];
    this.bottom++;
    return last;
  }
}
queueMethods.size = function() {
  return this.top - this.bottom
}

