console.log("***************************************Function Expression Assignment****************************************************")

console.log("---------------------------------------Square using function expression--------------------------------------------------")

var square = function(num){
    console.log("Square of", num,"= ",num*num);
}
square(5);
square(6);
square(25);
square(100);

console.log("---------------------------------------Log Type of square-----------------------------------------------------------")

var square = function(){
    console.log("The type of square function is:", typeof square)
}
square();

console.log("---------------------------------------Area of Rectangle using function expression----------------------------------------")

var areaOfRectangle = function(num1,num2){
    console.log("Area of Rectangle is-->", num1,"*",num2,"=",num1*num2);
}
areaOfRectangle(499,917);

console.log("---------------------------------------Area of triangle using function expression----------------------------------------")

var areaOfTriangle = function(num1,num2){
    console.log("Area of Triangle is--->","1/2 *", num1,"*",num2,"=",1/2*num1*num2);
}
areaOfTriangle(499,917);

console.log("---------------------------------------Swap of two args using function expression----------------------------------------")

var swapArgs = function(value1,value2,temp){
    var temp=value1;
    value1=value2;
    value2=temp;
console.log(value1,value2);
}
swapArgs("Virat","Anushka");
swapArgs(1000,2000);

console.log("---------------------------------------Find character and index position using function expression--------------------------")

var stringCharAndIndx = function(){
    var sentence =  "JavaScript the most popular language";
    var lengthTotal = sentence.length;
    var squareOfLength = sentence.length*sentence.length;

    console.log("Given string is: ",sentence);
    console.log("Index of character 'S' is:",sentence.indexOf("S"));
    console.log("Index of String 'lang' is:",sentence.indexOf("lang"));
    console.log("Character at index '6' is:",sentence.charAt(6));
    console.log("Position of last character of given string is:", sentence.charAt(lengthTotal-1));
    console.log("Position of first character of given string is:", sentence.charAt(0));
    console.log("Total length of given string is:", sentence.length);
    console.log("Square of length of given string is:", squareOfLength);

}
stringCharAndIndx();
console.log("----------------------------------------------------------------------------------------------------------------------------")
