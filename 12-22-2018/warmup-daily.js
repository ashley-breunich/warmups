// Warmup - Arrays

forLoop = (array) => {
    for(let i = 0; i <= array.length; i++) {
        console.log('for loop index:', i);
    }
}

forLoop([1,2,3,4,5,6,7,8,9,10]);


whileLoop = (array) => {
    let i = 0;
    while(i < array.length) {
        console.log('while loop index:', array[i]);
        i++
    }
}

whileLoop([1,2,3,4,5,6,7,8,9,10]);


map = (array) => {
    let mapped = array.map(function(index) {
        return index * 10
    });
    // expect output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    console.log('mapped', mapped);
}

map([1,2,3,4,5,6,7,8,9,10]);


filter = (array) => {
    let filter = array.filter(number => number > 7);
    // expect output: [8,9,10]
    console.log('filter', filter);
}

filter([1,2,3,4,5,6,7,8,9,10]);


reduce = (array) => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    // expect output: 55
    console.log(array.reduce(reducer));
}

reduce([1,2,3,4,5,6,7,8,9,10]);



// Warmup - Objects
const people = ['Kookla','Fran','Ollie'];

let newPeople = ['Oldie', ...people, 'Garfield'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
  }

let newStuff = {...stuff};
newStuff.cars = [...newStuff.cars, 'Mini Cooper'];

let state = {...[people], ...stuff};
state.people

let newState = {...[['Odie', ...people, 'Garfield']], ...{...stuff}};
newState.cars = [...newState.cars, 'Mini Cooper'];

console.log('original people', people)
console.log('new people', newPeople);
console.log('original stuff', stuff);
console.log('new stuff', newStuff);
console.log('state', state);
console.log('new state', newState);