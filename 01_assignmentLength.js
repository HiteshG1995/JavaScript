
console.log(`#1 wordLengthSquare declare as FE with one argument and called FE for each given word\n`)

var wordLengthSquare = function(value){

    console.log(`   Length of the "${value}" is: "${value.length}"`);
    console.log(`   Length square of the "${value}" is: "${value.length * value.length}"\n`);
}
wordLengthSquare(`JavaScript`);
wordLengthSquare(`Google`);
wordLengthSquare(`Developer`);

console.log(`#2 Created string "I am Angular Developer" with function having no args and no return value\n`)

function stringOperation(){
    var strValue = "I am Angular Developer";
    var newStrVal = strValue.split(" ");
    console.log(`   Length of the "${strValue}" is "${strValue.length}" and total words in string are "${newStrVal.length}"\n  
   After performing division length by total words is: "${strValue.length / newStrVal.length}"`)
     console.log(`   Performing Multiplication length by total words is: "${strValue.length * newStrVal.length}"`);
}
stringOperation();
