interface isPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(n:number):number;
}

const me: isPerson = {
    name:'shaun',
    age:30,
    speak(text:string):void {
        console.log(text);
    },
    spend(amount:number):number{
        console.log('I spent',amount);
        return amount;
    }

};

const greetPerson=(person:isPerson) => {
    console.log('hello',person.name);
}

greetPerson(me);

console.log(me);