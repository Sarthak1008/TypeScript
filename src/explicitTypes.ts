// Explicit types

let characterd: string;
let aged: number;
let isLoggedInd: boolean;

//age = 'luigi';
aged = 30;

//isLoggedIn = 25;
isLoggedInd = true;

//arrays
let ninjass: string[] = [];

ninjass.push('shaun');

// Union Types
let mixedss: (string|number|boolean)[] = [];
mixedss.push('hello');
mixedss.push(20);
mixedss.push(false);
console.log(mixeds);

let uids: string|number;
uids = '123';
uids = 123;

// Objects
let ninjaOnes: object;
ninjaOnes = {
    name:'yoshi',
    age: 30
}

let ninjaTwos: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwos = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
}