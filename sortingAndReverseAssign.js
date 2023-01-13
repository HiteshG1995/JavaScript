console.log(`********************************* Assignment (a) *****************************************`);

const array_roll_number = [113, 34, 56, 11, 32, 45, 109, 799, 56, 45]

console.log(`\n1) Reverse the array\n`);

array_roll_number.sort((a,b)=>{
    return a>b ? 1 : -1;
})
//console.log(array_roll_number);
array_roll_number.reverse();
console.log("  ",array_roll_number);

console.log(`\n2) Used the sort() method without any custom sorting logic and print on console\n`);

array_roll_number.sort()
console.log("  ",array_roll_number);

console.log(`\n3) Sort the array in ascending order with custom sorting logic\n`);

array_roll_number.sort((a,b)=>{
    return a>b ? 1 : -1;
})
console.log("  ",array_roll_number);

console.log(`\n4) Print the greates number from an array\n`);

const bigNum = array_roll_number[array_roll_number.length-1]
console.log(`    Using length method:"${bigNum}"`);

const bigNum1 = array_roll_number.slice(-1)
console.log(`    Using Slice method:"${bigNum1}"`);

console.log(`\n5) Print the Smaller number from an array\n`);

const SmallNum = array_roll_number[array_roll_number.length-10]
console.log(`    Using length method:"${SmallNum}"`);

const SmallNum1 = array_roll_number.slice(0,1,9)
console.log(`    Using Slice method:"${SmallNum1}"`);


console.log(`\n6) Remove duplicate elements from the array\n`);

const uniqArray = [...new Set(array_roll_number)]
console.log("  ",uniqArray);

