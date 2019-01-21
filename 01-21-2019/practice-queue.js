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
        let dequeuedItem = this.storage.deleteFromEnd();
        return dequeuedItem;
    }

    peek() {
        let peekedValue = this.storage.head;
        return peekedValue;
    }
}

module.exports = Queue;