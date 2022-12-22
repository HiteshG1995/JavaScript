function displayChar(sentence){

    var counter = 0;
    for(let index=0; index < sentence.length; index++){
        var char = sentence.charAt(index);
        var charCopy = char.toLowerCase();
        if(charCopy=='a')
        counter=counter+1
    }
    console.log(`String is: "${sentence}"`);
    console.log(`Total 'a' / 'A' in above string is: ${counter}`);



}
displayChar("I AM Learning JavaScript, The Language of internet")
console.log(`---------------------------------------------------------------`);
displayChar("LAggAn")
