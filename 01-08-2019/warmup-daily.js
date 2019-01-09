// Warmup - Arrays

forLoop = (array) => {
    for(let i = 0; i < array.length; i++) {
        console.log('index', i);
    }
}

forLoop([1,2,3,4,5,6,7,8,9,10]);

whileLoop = (array) => {
    let i = 0;
    while (i < array.length) {
        console.log('index', array[i]);
        i++;
    }
}

whileLoop([1,2,3,4,5,6,7,8,9,10]);

map = (array) => {
    let mapped = array.map(function(index) {
        return index + 10;
    });
    // expect output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    console.log(mapped);
}

map([1,2,3,4,5,6,7,8,9,10]);

 
filter = (array) => {
    let filter = array.filter(number => number > 2);
    // expected output: [3,4,5,6,7,8,9,10]
    console.log(filter);
}

filter([1,2,3,4,5,6,7,8,9,10]);

reduce = (array) => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    // expected output: 55
    console.log(array.reduce(reducer));
}

reduce([1,2,3,4,5,6,7,8,9,10]);

// Warmup - Objects

const people = ['Kookla','Fran','Ollie'];
const newPeople = ['Oldie', ...people, 'Garfield'];

const stuff = {
    tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: ['Toyota','Mazda']
  }

  let newStuff = {...stuff, cars:[...stuff.cars, 'Mini Cooper']};

  let state = {people, stuff};

  let newState = {...state, people:['Oldie', ...people, 'Garfield'], stuff: {...stuff, cars:[stuff.cars, 'Mini Cooper']}};