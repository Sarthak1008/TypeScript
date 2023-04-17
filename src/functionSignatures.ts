// let greet: Function;

// example 1
let greet: (a:string,b:string) => void;

greet = (name: string,greeting: string):void =>{
    console.log(`${name} says ${greeting}`);
}

//example2

let calc: (a:number,b:number,c:string) =>number;

calc = (numOne:number,numTwo:number,action:string) =>{
    if(action=='add'){
        return numOne+numTwo;
    }else{
        return numOne-numTwo;
    }
};

//example 3

type person = {
    name:string,
    age:number
}
let lD:(obj:person) => void;

lD = (ninja:person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
