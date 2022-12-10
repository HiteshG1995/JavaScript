console.log("********************************Assignment 2*************************************")
function details1(){
    console.log("My name is Hitesh")
}
function details2(){
    console.log("My hobbie is travelling")
}
details1();
details2();
console.log("--------------------------------------------------------------------------------")
function personalDetails(firstName,lastName, collegeName){
    console.log("|My first name is: ",firstName,"|My last name is: ", lastName,"|My college name: " ,collegeName);
}
personalDetails("Hitesh","Ghadage","PCCOE")
console.log("--------------------------------------------------------------------------------")

function swap_values(sum1,sum2){
    console.log("Before swap-->", sum1,sum2);
    var temp=sum1
    sum1=sum2
    sum2=temp
    console.log("After swap--->",sum1,sum2);
}
swap_values("Virat","Anushka")
swap_values(1000,2000);
console.log("--------------------------------------------------------------------------------")
function addThreeValues(val1,val2,val3){
    console.log("Addation of three values is-->",val1+val2+val3);
}
addThreeValues( 10.23,600,40)
addThreeValues( "Hello", "Good", "Morning")
console.log("--------------------------------------------------------------------------------")







