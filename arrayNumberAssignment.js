console.log(`\n***************************Assignment2*********************************\n`);

const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`#1 Array is: ${arrayNumber}`);
let arrayCount = arrayNumber.length;
console.log(`Total length of an array is: "${arrayCount}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#2 Logging first and last element of an Array`);
console.log(`Before logging : ${arrayNumber}`);
let firstAndLast = arrayNumber.splice(1,9)
console.log(`After logging : "${arrayNumber}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#3 Displaying third element using length`);
const arrayNumber1 = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Before displaying : ${arrayNumber1}`);
let dispLast3=arrayNumber1[2]
let dispLast4=arrayNumber1[arrayNumber1.length-3]
console.log(`Before displaying : "${dispLast4}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#4 Find all even numbers in array`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Before displaying even number : ${arrayNumber2}`);
var evenCount = ""
for (let index = 0; index < arrayNumber2.length; index++) {
    if (arrayNumber2[index]%2==0) {
        evenCount=evenCount+" "+arrayNumber2[index]
    }
}
console.log(`Even numbers un array are: "${evenCount}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#5 Find all odd numbers in array`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Before displaying odd number : ${arrayNumber2}`);
var oddCount = ""
for (let index = 0; index < arrayNumber2.length; index++) {
    if (arrayNumber2[index]%2==1) {
        oddCount=oddCount+" "+arrayNumber2[index]
    }
}
console.log(`Even numbers un array are: "${oddCount}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#6 Find all even position numbers in array`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Before displaying even number : ${arrayNumber2}`);
var evenCount = ""
for (let index = 0; index < arrayNumber2.length; index++) {
    if (index%2==0) {
        evenCount=evenCount+" "+arrayNumber2[index]
    }
}
console.log(`Even numbers un array are: "${evenCount}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#7 Find all odd position numbers in array`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Before displaying even number : ${arrayNumber2}`);
var oddCount = ""
for (let index = 0; index < arrayNumber2.length; index++) {
    if (index%2==1) {
        oddCount=oddCount+" "+arrayNumber2[index]
    }
}
console.log(`Even numbers un array are: "${oddCount}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#8 Sum of all elements from Array`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
var sumOfNum = 0;
for (let index = 0; index < arrayNumber2.length; index++) {
    const element = arrayNumber2[index];
    sumOfNum = sumOfNum + element
}
console.log(`Sum of all numbers in Array are: "${sumOfNum}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#9 Numbers which are multiple of Five`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Before displaying even number : ${arrayNumber2}`);
var multiFive = ""
for (let index = 0; index < arrayNumber2.length; index++) {
    if (arrayNumber2[index]%5==0) {
        multiFive=multiFive+" "+arrayNumber2[index]
    }
}
console.log(`#10 Numbers which are multiple of five are: "${multiFive}"`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#10 Check number 115 is available in Array`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
let isAvailable1 = arrayNumber2.includes(115);
if (isAvailable1==true) {
    console.log(`115 is Available in Array`);
}else{
    console.log(`115 is not Available in Array`);
}

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#11 Check number 23 is available in Array`);
var arrayNumber2 = [20,31,40,25,23,11,29,9,60,2,11];
let isAvailable2 = arrayNumber2.includes(23);
if (isAvailable2==true) {
    console.log(`23 is Available in Array`);
}else{
    console.log(`23 is not Available in Array`);
}

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#12 Inserting 55 & 66 before index 3`);
console.log(`Before inserting 55 & 66 number: ${arrayNumber2}`);
arrayNumber2.splice(3,0,55,66)
console.log(`After inserting 55 & 66 number: ${arrayNumber2}`);

console.log(`\n---------------------------------------------------------------------\n`);

console.log(`#13 Delete 3 elements starting from index 4`);
console.log(`Before deleting elements: ${arrayNumber2}`);
arrayNumber2.splice(3,3)
console.log(`Before deleting elements: ${arrayNumber2}`);

