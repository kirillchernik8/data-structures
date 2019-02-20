class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }
  push(value) {
    this.storage[this.top] = value;
    this.top++
  }

  pop() {
    if (this.top > 0) {
      let last = this.storage[this.top - 1];
      delete this.storage[this.top - 1];
      this.top--;
      return last;
    }
  }

  size() {
    return this.top;
  }
}