let ww:Function;

// greet = 'hello';

ww = () => {
    console.log("Hello , again");
}

const add = (a: number,b:number,c?:number|string) =>{
    console.log(a+b);
    console.log(c);
}

add(5,10);

const multiply = (a: number,b:number,c:number|string=14):void =>{
    console.log(a*b);
    console.log(c);
}

multiply(5,10,'20');

const minus = (a:number,b:number)=>{
    return (a-b);
}

let result = minus(10,7);


const divide = (a:number,b:number):number=>{
    return (a/b);
}

let res = divide(10,7);
