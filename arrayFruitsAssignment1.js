console.log(`*************************Assignment 1****************************************`);

console.log(`\nArray index is: fruits_seasonal = ['Banana','Orange','Apple','Mango','Water Melon'];\n`);

console.log(`#1 Log first and last element on console`);
const fruits_seasonal = ['Banana','Orange','Apple','Mango','Water Melon'];
console.log(`Before logging first and last elements: "${fruits_seasonal}"`);
let spliceResult = fruits_seasonal.splice(1,3)
console.log(`Before logging first and last elements: "${fruits_seasonal}"`);
console.log(fruits_seasonal);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#2 Add Papaya before Banana`);
const fruits_seasonal1 = ['Banana','Orange','Apple','Mango','Water Melon'];
console.log(`Before Adding: "${fruits_seasonal1}"`);
var unShiftResult = fruits_seasonal1.unshift('Papaya')
console.log(`After Adding: "${fruits_seasonal1}"`);
console.log(fruits_seasonal1);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#3 Remove Mango from Array`);
console.log(`Before Removing: "${fruits_seasonal1}"`);
let spliceResult1 = fruits_seasonal1.splice(4,1)
console.log(`After Removing: "${fruits_seasonal1}"`);
console.log(fruits_seasonal1);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#4 Add "Pineapple" at the last index`);
console.log(`Before Adding: "${fruits_seasonal1}"`);
let spliceResult3 = fruits_seasonal1.push('Pineapple')
console.log(`After Adding: "${fruits_seasonal1}"`);
console.log(fruits_seasonal1);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#5 Insert "Dragon Fruit" before Pineapple`);
console.log(`Before inserting: "${fruits_seasonal1}"`);
let spliceResult4 = fruits_seasonal1.splice(5,0,'Dragon Fruit')
console.log(`After inserting: "${fruits_seasonal1}"`);
console.log(fruits_seasonal1);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#6 Replace Orange with "Kiwi"`);
console.log(`Before Replacing: "${fruits_seasonal1}"`);
let spliceResult5 = fruits_seasonal1.splice(2,1,'Kiwi')
console.log(`After Replacing: "${fruits_seasonal1}"`);
console.log(fruits_seasonal1);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#7 Log the element starting from 1 to 4`);
console.log(`Before condition : "${fruits_seasonal1}"`);
let sliceRes = fruits_seasonal1.slice(1,5)
console.log(`After logging element from 1 to 4: "${sliceRes}"`);
console.log(sliceRes);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#8 Displaying last three element using length`);
console.log(`Before Displaying : "${fruits_seasonal1}"`);
let lengthProp = fruits_seasonal1.splice(fruits_seasonal1.length-3)
console.log(`Displaying last three element using length: "${lengthProp}"`)
console.log(lengthProp);
