'use strict'

const LinkedList = require('../practice-linked-list.js');

function traverse() {
    let LL = new LinkedList();
    let values = [];
    let current = LL.this.head;

    while(current.next) {
        values.push(current.next);
        current = current.next;
    }
    return values;
}

module.exports = traverse;