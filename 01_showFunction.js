console.log("--------------Call function multiple time with no return and arguments------------------------------")
function show(){
    console.log("PCCOE");
}

show();
show();
show();

console.log("--------------Call function multiple time with only arguments---------------------------------------")

function details(myName, collegeName, pincode){
    console.log("My name is",myName, "My college name is", collegeName,"My pincode" ,pincode);
}

details("Hitesh","PCCOE",412101);
details("Rahul","VIT Pune",422011);
details("Amar","DY Patil", 432011);

console.log("-------------Call function multiple time with only arguments using swap function---------------------")


function swapValues(value1,value2,value3){
    console.log("Before Swap ",value1,value2,value3);
    var temp = value1;
    value1=value2;
    value2=temp
    value2=value3;
    value3=temp;   
    console.log("After Swap ",value1,value2,value3);
}

swapValues(100,200,300);
swapValues("Amar","Akbar","Anthony");

console.log("---------------Call function multiple time with argument and return type-----------------------------")


function returnValues(money)
{
    console.log("Go to store",money);
    console.log("Take a bag",money);
    console.log("Buy some medicine",money);
    console.log("come back");
    return "Come to check again";

}
var packOfMedicine=returnValues(50)
console.log(packOfMedicine);
