const people = ['Kookla','Fran','Ollie'];

// Destructuring Assingment & Spread Syntax on people
let newPeople = ['Odie', ...people, 'Garfield'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

// Destructuring Assingment & Spread Syntax on stuff
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