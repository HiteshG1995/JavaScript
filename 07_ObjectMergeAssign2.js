console.log(`*************** Assignment (b) merge or concat two objects using concat() & spread ***************\n`);

const car = {
    carName: "Creta SX",
    company: "Hundai",
    launchYear: 2017
}

const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 BHP"
}

console.log(`Object car`);
console.log(car);
console.log(`Object carEngine`);
console.log(carEngine);
console.log(``);

console.log(`1) Merge using Object.assign()`);
Object.assign(car,carEngine)
console.log(car);
console.log(``);

console.log(`2) Merge using ...Spread operator`);
let mergeSpObj = {...car,...carEngine}
console.log(mergeSpObj);