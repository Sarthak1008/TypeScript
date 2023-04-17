"use strict";
let ww;
// greet = 'hello';
ww = () => {
    console.log("Hello , again");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const multiply = (a, b, c = 14) => {
    console.log(a * b);
    console.log(c);
};
multiply(5, 10, '20');
const minus = (a, b) => {
    return (a - b);
};
let result = minus(10, 7);
const divide = (a, b) => {
    return (a / b);
};
let res = divide(10, 7);
