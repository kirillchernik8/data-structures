var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let queue = {
    storage: {},
    top: 0,
    bottom: 0
  };

  extend (queue, queueMethods)
  return queue;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top++;
};


queueMethods.dequeue = function () {
  if(this.top > this.bottom) {
    let bottomEl = this.storage[this.bottom];
    delete bottomEl;
    this.bottom++;
    return bottomEl;
  }
};

queueMethods.size = function () {
  return this.top - this.bottom
};




