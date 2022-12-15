console.log("*****************************************Assignment 2********************************************")
var stringHandsOn = function(){

    var sentenceIs = "   Hey are you doing good, keep it up   ";
    var trimStartandEnd = sentenceIs.trim();
    var totalLengthTrim = trimStartandEnd.length;
    var wordsInSentence =  trimStartandEnd.split(" ");
    var indexOfSubStr = trimStartandEnd.indexOf("good");
    var usingSubstr = trimStartandEnd.substring(22);
    var usingSlicestr = trimStartandEnd.slice(22);
    var strEndUp = trimStartandEnd.endsWith("up");
    var strWthHey = trimStartandEnd.startsWith("Hey");

    console.log(`#1 The string is: "${sentenceIs}"\n`);
    console.log(`#2 The length of string is: "${sentenceIs.length}"\n`);
    console.log(`#3 The string after trim is: "${trimStartandEnd}"\n`);
    console.log(`#4 The length after trim is: "${trimStartandEnd.length}"\n`);
    console.log(`#5 Position of first character after trim is: "${trimStartandEnd.charAt(0)}" | Position of last character after trim is: "${trimStartandEnd.charAt(totalLengthTrim-1)}"\n`);
    console.log(`#6 The total words available in string after step 3 is: "${wordsInSentence.length}"`);
    console.log(`   And list after split by char: "${wordsInSentence}"\n`);
    console.log(`#7 index position of "good" after step 3 is: "${indexOfSubStr}"\n`);
    console.log(`#8 with substring() starting from index 22 is: "${usingSubstr}" \n   and with slice() starting from index 22 is: "${usingSlicestr}"\n`);
    console.log(`#9 Check is string end with "up" after step 3: "${strEndUp}"\n`);
    console.log(`#10 Check is string start with "Hey" after trim is: "${strWthHey}"`);


}
stringHandsOn()
console.log("*************************************************************************************************")
