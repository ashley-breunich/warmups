'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let results = [];

        let _walk = node => {
            results.push(node.value);
            if(node.left) {
                _walk(node.left);
            }
            if(node.right) {
                _walk(node.right);
            }
        }
        _walk(this.root);
        return results;
    }

    inOrder() {
        let results = [];

        let _walk = node => {
            if(node.left) {
                _walk(node.left);
            }
            results.push(node.value);
            if(node.right) {
                _walk(node.right);
            }
        }
        _walk(this.root);
        return results;
    }

    postOrder() {
        let results = [];
        let _walk = node => {
            if(node.left) {
                _walk(node.left);
            }
            if(node.right) {
                _walk(node.right);
            }
            results.push(node.value);
        }
    _walk(this.root);
    return results;
    }

    breadthFirst() {
        let results = [];
        let nodeQueue = [];

        nodeQueue.push(this.root);

        while(nodeQueue.length) {
            let current = nodeQueue.shift();
            results.push(current.value);

            if(current.left) {
                nodeQueue.push(current.left);
            }
            if(current.right) {
                nodeQueue.push(current.right);
            }
        }
        console.log('breadthFirst Results', results);

        return results;
    }

    binarySearchTree(tree) {
        let values = [];
        let result = true;
      
        let _walk = node => {
          if(node.left) {
            _walk(node.left);
          }
          values.push(node.value);
          if(node.right) {
            _walk(node.right);
          }
        }
        _walk(this.root);

        for (let i = 0; i < values.length; i++) {
            let currentVal = values[i];
            let nextVal = values[i+1];
            if (nextVal < currentVal) {
                result = false;
                break;
            }
        }
       return result;
    }

}

module.exports = BinaryTree;