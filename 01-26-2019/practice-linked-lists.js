'use strict'

const LinkedList = require('../practice-linked-list.js');

function traversal() {
    let LL = new LinkedList();
    let current = LL.head;
    let values = [];

    while(current) {
        values.push(current.value);
        current = current.next;
    }
    return values;
}

module.exports = LinkedList;