console.log("Part 1");
console.log("---------Before Swap---------");
var firstName="Sweety";
var lastName="Cutie";
console.log(firstName,lastName);
console.log("---------After Swap----------");
var temp=firstName;
firstName=lastName;
firstName=temp;
console.log(firstName,lastName);
console.log('============================================================')
console.log("Part 2");
console.log("---------Before Swap---------");
var num1=100;
var num2=200;
var num3=300;
console.log(num1,num2,num3);
console.log("---------After Swap---------");
var temp = num1;
num1=num2;
num2=temp
var temp1 = num2;
num2=num3;
num3=temp;
console.log(num1,num2,num3);

