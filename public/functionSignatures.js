"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example2
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let lD;
lD = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
