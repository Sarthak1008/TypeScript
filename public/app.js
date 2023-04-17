import { Invoices } from './classes/Invoices.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
//const anchor = document.querySelector('a')!;
//if(anchor){
//   console.log(anchor.href);
//}
//console.log(anchor.href);
const invOne = new Invoices('mario', 'works on the mario website', 250);
const invTwo = new Invoices('luigi', 'works on the luigi Website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//invOne.client='yoshi';
//invTwo.amount=400;
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const forms = document.querySelector('form');
console.log(forms);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let docs;
    if (type.value == 'Invoice') {
        docs = new Invoices(...values);
    }
    else {
        docs = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(docs, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello')
console.log(docOne.age);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {
        name: 'shaun'
    }
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ['bread', 'milk', 'toilet roll']
};
console.log(docThree, docFour);
// Tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
let student;
//student = [26342,'ken'];
student = ['chun-li', 25532];
