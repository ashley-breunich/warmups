'use strict';

let Node = require('../node.js');
// let LL = require('../practice-linked-list.js');
let LinkedList = require('../01-22-2019/practice-linked-lists.js');
let Stacks = require('../01-22-2019/practice-stack.js');
let Queue = require('../01-22-2019/practice-queue.js');
const BinaryTree = require('../01-21-2019/practice-trees.js');


describe('Linked List Traversal', () => {
    it('The linked list can be traversed and the values are returned.', ()=> {
      let list = new LinkedList();
      list.append('blue');  
      list.append('green');
      list.append('yellow');
      list.append('orange');
      list.append('pink');
      let results = list.traversal();
      // console.log(results, 'results');
      expect(results).toEqual(["blue", "green", "yellow", "orange", "pink"]);
    });
  });

  describe('Stack - Push', () => {
    it('A stack can be added to - Last In First Out.', ()=> {
      let stack = new Stacks();
      stack.push(1);
      expect(stack.top.value).toBe(1);
      stack.push(2);  
      expect(stack.top.value).toBe(2);
      stack.push(3); 
      expect(stack.top.value).toBe(3);  
      stack.push(4); 
      expect(stack.top.value).toBe(4);
      // console.log(stack);
    });
  });

  describe('Stack - Pop', () => {
    it('A stack can be removed from - Last In First Out.', ()=> {
      let stack = new Stacks();
      stack.push(1);
      expect(stack.top.value).toBe(1);
      stack.push(2);  
      expect(stack.top.value).toBe(2);
      stack.push(3); 
      expect(stack.top.value).toBe(3);  
      stack.push(4); 
      expect(stack.top.value).toBe(4);
      let popped = stack.pop();
      // console.log(popped);
      expect(popped.value).toBe(4);
      let popped2 = stack.pop();
      // console.log(popped2);
      expect(popped2.value).toBe(3);
      // console.log(stack);
    });
  });

  describe('Stack - Peek', () => {
    it('A stack can peek to the top value', ()=> {
      let stack = new Stacks();
      stack.push(1);
      expect(stack.top.value).toBe(1);
      stack.push(2);  
      expect(stack.top.value).toBe(2);
      stack.push(3); 
      expect(stack.top.value).toBe(3);  
      stack.push(4); 
      expect(stack.top.value).toBe(4);
      let peekedValue = stack.peek();
      expect(peekedValue.value).toBe(4);
      stack.pop();
      let peekedValue2 = stack.peek();
      expect(peekedValue2.value).toBe(3);
    });
  });

  describe('Queue - Enqueued', () => {
    it('A queue can be enqueued in the correct order - First In First Out.', ()=> {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.storage.head.value).toBe(1);
      queue.enqueue(2);
      expect(queue.storage.head.value).toBe(2);
      queue.enqueue(3);
      expect(queue.storage.head.value).toBe(3);
      queue.enqueue(4);
      expect(queue.storage.head.value).toBe(4);
      expect(queue.storage.head.next.value).toBe(3);
      expect(queue.storage.head.next.next.value).toBe(2);
      expect(queue.storage.head.next.next.next.value).toBe(1  );
      // console.log('queue', queue);
    });
  });

  describe('Queue - Dequeued', () => {
    it('A queue can be dequeued in the correct order - First In First Out.', ()=> {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.storage.head.value).toBe(1);
      queue.enqueue(2);
      expect(queue.storage.head.value).toBe(2);
      queue.enqueue(3);
      expect(queue.storage.head.value).toBe(3);
      queue.enqueue(4);
      expect(queue.storage.head.value).toBe(4);
      let dequeued = queue.dequeue();
      expect(dequeued.value).toBe(1);
      let dequeued2 = queue.dequeue();
      expect(dequeued2.value).toBe(2);
      // console.log(queue);
      let dequeued3 = queue.dequeue();
      expect(dequeued3.value).toBe(3);
      // console.log(queue);
    });
  });

  describe('Queue - Peek', () => {
    it('A queue can peek to the front value', ()=> {
      let queue = new Queue();
      queue.enqueue(1);
      expect(queue.storage.head.value).toBe(1);
      queue.enqueue(2);
      expect(queue.storage.head.value).toBe(2);
      queue.enqueue(3);
      expect(queue.storage.head.value).toBe(3);
      queue.enqueue(4);
      expect(queue.storage.head.value).toBe(4);
      let peekedValue = queue.peek();
      expect(peekedValue.value).toBe(4);
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

describe('Binary Tree Traversals', () => {

    // it('Can perform a preOrder traversal', () => {
    //   let preOrderTraversal = treeTest.preOrder();
    //   expect(preOrderTraversal).toEqual([100, 70, 50, 30, 75, 120, 115, 125, 118, 140]);
    // });
  
    // it('Can perform an inOrder traversal', () => {
    //   let inOrderTraversal = treeTest.inOrder();
    //   expect(inOrderTraversal).toEqual([30, 50, 70, 75, 100, 115, 120, 118, 125, 140]);
    // });
  
    // it('Can perform a postOrder traversal', () => {
    //   let postOrderTraversal = treeTest.postOrder();
    //   expect(postOrderTraversal).toEqual([30, 50, 75, 70, 115, 118, 140, 125, 120, 100]);
    // });
  
    // it('Can perform a breadthFirst traversal', () => {
    //   let BreadthFirstTraversal = treeTest.breadthFirst();
    //   expect(BreadthFirstTraversal).toEqual([ 100, 70, 120, 50, 75, 115, 125, 30, 118, 140 ]);
    // });

    it('Can check whether a tree is a BST', () => {
      let searchTree = treeTest.binarySearchTree();
      expect(searchTree).toEqual(true);
    });
    
  });

let oneTest = new Node (100);
let twoTest = new Node (70); 
let threeTest = new Node (120);
let fourTest = new Node (50);
let fiveTest = new Node (75);
let sixTest = new Node (115);
let sevenTest = new Node (125);
let eightTest = new Node (30);
let nineTest = new Node (121);
let tenTest = new Node (140);

oneTest.left = twoTest;
oneTest.right = threeTest;
twoTest.left = fourTest;
twoTest.right = fiveTest;
threeTest.left = sixTest;
threeTest.right = sevenTest;
fourTest.left = eightTest;
sevenTest.left = nineTest;
sevenTest.right = tenTest;

let treeTest = new BinaryTree(oneTest);