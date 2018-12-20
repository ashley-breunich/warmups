'use strict';

let Node = require('../node.js');
let LL = require('../practice-linked-list.js');
let Stacks = require('../practice-stack.js');
let Queue = require('../practice-queue.js');
const BinaryTree = require('../practice-trees.js');


describe('Linked List Traversal', () => {
    it('The linked list can be traversed and the values are returned.', ()=> {
      let list = new LL();
      list.append(1);  
      list.append(2);
      list.append(3);
      let results = list.traversal();
      expect(results).toEqual([1,2,3]);
    });
  });

  describe('Process Stack in the correct order', () => {
    it('A stack can be processed in the correct order - Last In First Out.', ()=> {
      let stack = new Stacks();
      stack.push(1);
      expect(stack.top.value).toBe(1);
      stack.push(2);  
      expect(stack.top.value).toBe(2);
      stack.push(3);  
      expect(stack.top.value).toBe(3);  
      stack.push(4); 
      expect(stack.top.value).toBe(4);
    });
  });

  describe('Process Queue in the correct order', () => {
    it('A queue can be processed in the correct order - First In First Out.', ()=> {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.storage.head.value).toBe(1);
      queue.enqueue(2);
      expect(queue.storage.head.value).toBe(2);
      queue.enqueue(3);
      expect(queue.storage.head.value).toBe(3);
      queue.enqueue(4);
      expect(queue.storage.head.value).toBe(4);
    });
  });

let one = new Node (1);
let two = new Node (2);
let three = new Node (3);
let four = new Node (4);
let five = new Node (5);
let six = new Node (6);
let seven = new Node (7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;

let tree = new BinaryTree(one);

describe('Binary Traversal Trees', () => {

    it('Can perform a preOrder traversal', () => {
      let preOrderTraversal = tree.preOrder();
      expect(preOrderTraversal).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });
  
    it('Can perform an inOrder traversal', () => {
      let inOrderTraversal = tree.inOrder();
      expect(inOrderTraversal).toEqual([ 4, 2, 5, 1, 6, 3, 7 ]);
    });
  
    it('Can perform a postOrder traversal', () => {
      let postOrderTraversal = tree.postOrder();
      expect(postOrderTraversal).toEqual([ 4, 5, 2, 6, 7, 3, 1 ]);
    });
  
    it('Can perform a breadthFirst traversal', () => {
      let BreadthFirstTraversal = tree.breadthFirst();
      expect(BreadthFirstTraversal).toEqual([ 1, 2, 3, 4, 5, 6, 7 ]);
    });
    
  });