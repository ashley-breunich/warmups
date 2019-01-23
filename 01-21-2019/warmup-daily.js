// Warmup - Arrays

forLoop = (array) => {
    for(let i = 0; i < array.length; i++) {
        console.log(`index value:`, array[i]);
    }
}

forLoop(['henry', 'john', 'carlos']);

whileLoop = (array) => {
    let i = 0;

    while (i < array.length) {
        console.log(`index value:`, array[i]);
        i++;
    }
}

whileLoop(['ashley', 'ponyo', 'james', 'grace']);

map = (array) => {
    let mapped = array.map(x => x * 2);
    return mapped;
}

map([3,8,10,17]);

filter = (array) => {
    let filter = array.filter(number => number < 30);
    return filter
}

filter([3,5,9,17,29,40,101,119]);

reduce = (array) => {
    let reducer = (accumulator, currentValue) => accumulator - currentValue;
    return array.reduce(reducer);
}

reduce([30,10,17,2,6]);


// Warmup - Objects

const people = ['Kookla','Fran','Ollie'];
const newPeople = ['Oldie', ...people, 'Garfield'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
  }

let newStuff = {...stuff, cars:[...stuff.cars, 'Porsche']};

let state = {people, stuff};

let newState = {...state, people: ['Oldie', ...people, 'Frannie'], stuff: {...stuff, cars:[...stuff.cars, 'Porsche']}};

console.log('original people', people)
console.log('new people', newPeople);
console.log('original stuff', stuff);
console.log('new stuff', newStuff);
console.log('state', state);
console.log('new state', newState);