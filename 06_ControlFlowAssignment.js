console.log(`----------------Vowels----------------------\n`);


function vowels(result){

    let counter = 0;
    for(index=0; index < result.length; index++){
    let char = result.charAt(index);
    let charCopy = char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') 
        counter = counter + 1;
    }
    console.log(`String is: "${result}"`);
    console.log(`Total vowels in above string is "${counter}"`);
    
}
vowels("I am very good IT Developer")

console.log(`\n----------------Cube addation---------------\n`);

function cubeCheck(num){

        var sumn = 0;
        for(i = 1; i <=num; i++){
        sumn += Math.pow(i, 3);
    }
    console.log(`sum of cube till "1" to "${num}" is ---> "${sumn}"`);
}
cubeCheck(5)

console.log(`\n-------------Odd position characters---------\n`);

function oddPositionChar(value){

    console.log(`Given string is: "${value}"`);
    String1 = value.replaceAll(" ","")
    var oddString = "";
    for(let index=0; index<String1.length; index++){
        var char = String1.charAt(index);
        if(index%2==1){
            oddString = oddString+" "+char;
        }
    }
    console.log(`Odd character of string: ${oddString}`);

}
oddPositionChar("Hard works always pays back")
oddPositionChar("Soon I will be Angular IT champ");

console.log(`\n-------------Odd position characters---------\n`);

var factorial = function(num){

    var fact = 1;
    for(let i=num;i>0;i--){
    fact = fact*i;
    }
    console.log(`Factorial of "${num}" is --> ${fact}`);
}
factorial(5)
factorial(7)
factorial(8)
factorial(12)
