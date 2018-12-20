'use strict';

let codeChallenge = module.exports = {};

codeChallenge.forLoop = (array) => {
    for(let i = 0; i <= array.length; i++) {
        console.log('for loop index:', i);
    }
}

codeChallenge.forLoop([1,2,3,4,5,6,7,8,9,10]);


codeChallenge.whileLoop = (array) => {
    let i = 0;
    while(i < array.length) {
        console.log('while loop index:', array[i]);
        i++
    }
}

codeChallenge.whileLoop([1,2,3,4,5,6,7,8,9,10]);


codeChallenge.map = (array) => {
    let mapped = array.map(function(index) {
        return index * 10
    });
    // expect output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    console.log('mapped', mapped);
}

codeChallenge.map([1,2,3,4,5,6,7,8,9,10]);


codeChallenge.filter = (array) => {
    let filter = array.filter(number => number > 7);
    // expect output: [8,9,10]
    console.log('filter', filter);
}

codeChallenge.filter([1,2,3,4,5,6,7,8,9,10]);


codeChallenge.reduce = (array) => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    // expect output: 55
    console.log(array.reduce(reducer));
}

codeChallenge.reduce([1,2,3,4,5,6,7,8,9,10]);
