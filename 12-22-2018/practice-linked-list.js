'use strict';

const LinkedList = require('../practice-linked-list.js');

function traverse() {
    let LL = new LinkedList();
    let values = [];
    let current = LL.this.head;

    while(current) {
        values.push(current.value);
        current = current.next;
    }

    return values
};