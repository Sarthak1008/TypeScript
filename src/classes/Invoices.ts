//Classes

import { HasFormatter } from "../interfaces/HasFormatter.js";



// All properties are public by default in typescript
export class Invoices implements HasFormatter{
    //readonly client: string;
    //private details: string;
    //public amount:number;

    constructor(readonly client:string,private details:string,public amount:number){  
    }

    format(){
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}