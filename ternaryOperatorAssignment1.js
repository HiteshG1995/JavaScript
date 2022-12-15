console.log(`**************************************Assignment 1*********************************************\n`);
var bigNumber = function(val1,val2){

    var result = (val1>val2) ? val1 : val2;
    console.log(`Compare among "${val1}" and "${val2}" then greater value is "${result}"`);

}
bigNumber(-10,10);
bigNumber(800,899);

console.log(`-----------------------------------------------------------------------------------------------`);

var evenOrOddNum = function(value1){

    var checkEvenOrOdd = (value1%2==0) ? "Even number" : "Odd number";
    var trueAndFalse = (value1%2==0) ? true : false;
    console.log(`The number is "${value1}" and it is "${checkEvenOrOdd}". So, the value is "${trueAndFalse}"`);

}
evenOrOddNum(29)
evenOrOddNum(44)
evenOrOddNum(0)
evenOrOddNum(101)

console.log(`-----------------------------------------------------------------------------------------------`);

var charLengthCheck = function(lengthIs){

    var charEvenOrOdd = (lengthIs.length%2==0) ? "Even sequence" : "Odd sequence";
    console.log(`The character is "${lengthIs}" and the length is in "${charEvenOrOdd}."`);
}
charLengthCheck("JavaScript")
charLengthCheck("Developer")
charLengthCheck("Google")

