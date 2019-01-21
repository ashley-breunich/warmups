'use strict';
const Node = require('../node.js');
const LL = require('../practice-linked-list.js');

class Stack {
    constructor() {
        this.top = null;
        this.storage = new LL();
    }

    push(node) {
        this.storage.append(node);
        this.top = this.storage.tail;
    }

    pop() {
        let poppedValue = this.storage.deleteFromEnd();
        this.top = this.storage.tail;
        return poppedValue;
    }

    peek() {
        let peekedValue = this.storage.getLastValue();
        return peekedValue;
    }
}

module.exports = Stack;