import { Invoices } from './classes/Invoices.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js'; 
/*
let docone: HasFormatter;
let doctwo: HasFormatter;

docone = new Invoices("yoshi","web work",250);
doctwo = new Payment("mario","plumber work",200);
*/
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

//const anchor = document.querySelector('a')!;

//if(anchor){
//   console.log(anchor.href);
//}

//console.log(anchor.href);

const invOne = new Invoices('mario','works on the mario website',250);
const invTwo = new Invoices('luigi','works on the luigi Website',300);

let invoices: Invoices[] = [];
invoices.push(invOne);
invoices.push(invTwo);

//invOne.client='yoshi';
//invTwo.amount=400;

console.log(invoices);

invoices.forEach(inv =>{
    console.log(inv.client,inv.amount,inv.format());
})
const forms = document.querySelector('form')!;
console.log(forms);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e:Event) =>{
    e.preventDefault();

    let values: [string,string,number];
    values = [tofrom.value,details.value,amount.valueAsNumber]

    let docs: HasFormatter;
    if(type.value=='Invoice'){
        docs = new Invoices(...values);
    }else{
        docs = new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }

    list.render(docs,type.value,'end');

});

// Generics

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj,uid};
}

let docOne = addUID({name:'yoshi',age:40});
// let docTwo = addUID('hello')

console.log(docOne.age);

//ENUMS
enum ResourceType { BOOK,AUTHOR,FILM,DIRECTOR,PERSON}
//with interfaces
interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data:T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {
        name: 'shaun'
    }
};

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ['bread','milk','toilet roll']
};

console.log(docThree,docFour);

// Tuples

let arr = ['ryu',25,true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30,false,'yoshi'];

let tup: [string,number,boolean] = ['ryu',25,true];
tup[0] = 'ken';
tup[1] = 30;

let student: [string,number];
//student = [26342,'ken'];
student = ['chun-li',25532];