function palindrome(value){
reVal = ""

for(let i=value.length-1;i>=0;i--){
    let char = value.charAt(i)
    reVal=reVal+char
}
if(value==reVal){
    console.log(`Given string "${value}" is palendrome`);
}else{
    console.log(`Given string "${value}" is not palendrome`);
}
}
palindrome("mom")
palindrome("malayalam")
palindrome("sjao")
