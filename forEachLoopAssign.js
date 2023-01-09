console.log(`*************************************** Assignment (02) *******************************************\n`);

const array_number = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]
console.log(" Given array is:",array_number);

console.log(`\n1) Declare array and print element with its index using for-each loop\n`);

array_number.forEach((valueOfArray, index) => {
    console.log(`   Value of Array: ${valueOfArray} | Index of Array: ${index}`);
});

console.log(`\n2) Print only positive number and log on console using forEach() with arrow function\n`);

console.log(`   a)Find positive elements form array`);
positiveArray = []
array_number.forEach((valueOfArray) => {
    if(valueOfArray>0){
        positiveArray.push(valueOfArray)
    }
});
console.log("  ",positiveArray);


console.log(`\n   b)Find negative elements form array`);
negativeArray = []
array_number.forEach((valueOfArray) => {
    if(valueOfArray<0){
        negativeArray.push(valueOfArray)
    }
});
console.log("  ",negativeArray);

console.log(`\n3) Find even numbers and log on console using forEach() loop with arrow function`);
newArr=[]
array_number.forEach((valueOfArray) => {
    if(valueOfArray%2==0){
        newArr.push(valueOfArray)
    }
});
console.log("  ",newArr);
console.log(`   Even elements array are: "${newArr}"`);

console.log(`\n4) Sum of all the elements form the array and print on console`);
sum = 0;
array_number.forEach((valueOfArray) => {
   sum += valueOfArray ;
});
console.log(`   Sum of array is: "${sum}"`);

console.log(`\n4) Logged the even positioned array and print on console using forEach() loop with arrow function`);
evenPos = []
array_number.forEach((valueOfArray, index) => {
    if(index%2==0){
        evenPos.push(valueOfArray)
    }
});
console.log("  ",evenPos);
console.log(`   Even positioned array are: "${evenPos}"`);

