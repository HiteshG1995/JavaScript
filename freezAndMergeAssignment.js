console.log(`************************************************ Freeze and Merge **********************************************************\n`);

const personalDetails = {
    Name: "Hitesh",
    age: 23,
    height: 5.8,
    weight: 78,
    gender: "Male"
}

const collegeDetails = {
    CollegeName: "PCCOE",
    location: "Pimpri-Chinchwad",
    UID: "UID43504",
    Department: "Engineering and Research",
    pinCode: 422331
}

console.log(`1) Create Object literals "persoalDetails"`);
console.log(personalDetails);
console.log(``);
console.log(`2) Create Object literals "collegeDetails"`);
console.log(collegeDetails);
console.log(``);
console.log(`3) Merge two objects and log details on console`);
Object.assign(personalDetails, collegeDetails)
console.log(personalDetails);
console.log(``);
console.log(`4) Create array of your friend name and freezed`);
let frndArray = ["Komal","Amit","Chetan","Varsha","Pooja"]
console.log(`   After freezing:`);
Object.freeze(frndArray)
console.log(`   ${frndArray}`);
console.log(``);
console.log(`5) Iterate step 4 array using for of loop and log friends on console`);
let series = ""
for (const iterator of frndArray) {
    series = iterator                 // Print array horizontally (Use console inside "for of")
    //series = series+" "+iterator    // Print array in pyramid with space (use inside console of "for of") & print last string with space (outside console of "for of") 
    //series += iterator              // Print array in pyramid (use inside console of "for of") & print last string with (outside console of "for of")
    console.log(`   ${series}`);   

}
 //console.log(`   ${series}`);
 console.log(``);
 console.log(`6) Reverse a string "company"`);
//  let company = "Codemind Technology"
//  let compFirstName = "Codemind"
//  revStr=""
//  for (let index = company.length-1; index >= 9; index--) {
//     let char = company.charAt(index);
//     revStr=revStr+char
//     result=compFirstName+" "+revStr
    
//  }
//  console.log(`   Before reverse: ${company}`);
//  console.log(`   After reverse:  ${result}`);

let company = "Codemind Technology"
let revStr=""
let afterSplit = company.split(" ")
 for (let index = 0; index < afterSplit.length; index++) {
    const element = afterSplit[index];
 if(index==1){
    for (let index = element.length; index >= 0; index--) {
    revStr = revStr+" "+element.charAt(index)
    }
  }
}
let result = afterSplit[0]+" "+revStr
 console.log(`   Before reverse: ${company}`);
 console.log(`   After reverse:  ${result}`);







