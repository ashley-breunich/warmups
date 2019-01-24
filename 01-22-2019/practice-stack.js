'use strict';
const Node = require('../node.js');
const LL = require('../practice-linked-list.js');

class Stack {
    constructor() {
        this.top = null;
        this.storage = new LL();
    }

    push(value) {
        this.storage.append(value);
        this.top = this.storage.tail;
        return this;
    }

    pop() {
        let poppedItem = this.storage.deleteFromEnd();
        this.top = this.storage.tail;
        return poppedItem;
    }

    peek() {
        let peekedValue = this.storage.getLastValue();
        return peekedValue;
    }
}

module.exports = Stack;