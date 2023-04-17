type stringOrName = string|number;
type objectWithName = {
    name:string,
    uid:stringOrName
}

const logDetails = (uid:stringOrName,item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetwelcome = (user:objectWithName) => {
    console.log(`${user.name} says hello`);
}

const greetwelcomeagain = (user:objectWithName) => {
    console.log(`${user.name} says hello`);
}
