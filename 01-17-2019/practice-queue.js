'use strict';

const LL = require ('../practice-linked-list.js');

class Queue {
    constructor() {
        this.front = null;
        this.storage = new LL();
    }

    enqueue(value) {
        this.storage.prepend(value);
        // this is the prepend function
        // let node = new Node(value);
        // node.next =this.head;
        // this.head = node;
        this.front = this.storage.head.value;
        return this;
    }

    dequeue() {
        let dequeuedItem = this.storage.deleteFromEnd();
        return dequeuedItem;
    }

    peek() {
        let firstItem = this.storage.head;
        return firstItem;
    }
}

module.exports = Queue;