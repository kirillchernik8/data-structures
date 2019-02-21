var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // 1) Create a some instance (and its properties) that will be return by the creator function
  let stack = {
    top: 0,
    storage: {}
  };
  // 2) extend the created object with methods defined below
  extend(stack, stackMethods);
  return stack;
};

const extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};

stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function () {
  if (this.top > 0) {
    let topMostEl = this.storage[this.top - 1];
    console.log(this.storage[this.top-1])
    delete this.storage[this.top - 1];
    this.top--;
    return topMostEl;
  }
};

stackMethods.size = function () {
  return this.top
};

