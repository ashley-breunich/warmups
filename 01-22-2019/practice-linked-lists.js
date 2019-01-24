'use strict'

const LinkedList = require('../practice-linked-list.js');

function traversal() {
    let values = [];
    let current = this.head;

    while(current) {
        values.push(current.value);
        current = current.next;
    }
    return values;
}

module.exports = LinkedList;