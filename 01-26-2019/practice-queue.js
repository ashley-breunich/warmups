'use strict';

const LL = require ('../practice-linked-list.js');

class Queue {
    constructor() {
        this.front = null;
        this.storage = new LL();
    }

    enqueue(value) {
        this.storage.prepend(value);
        this.front = this.storage.head.value;
        return this;
    }

    dequeue() {
        let dequeuedValue = this.storage.deleteFromEnd();
        return dequeuedValue;
    }

    peek() {
        let peekedValue = this.storage.head;
        return peekedValue;
    }
}

module.exports = Queue;