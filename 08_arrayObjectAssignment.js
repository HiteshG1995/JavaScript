console.log(`a) Create a class and add data members and initilize all the properties in constructor`);

class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name=bank_name,
        this.location=location,
        this.account_no=account_no,
        this.ifsc=ifsc,
        this.interest_rate=interest_rate
    }
}
let axis_bank = new Bank("AXIS Bank", "Pune", 7768005432, "AXIS000056", "8.86 %")
let sbi_bank = new Bank("SBI Bank", "Mumbai", 88976587908, "SBIN00023", "7.96 %")
let icici_bank = new Bank("ICICI Bank", "Thane", 4512365444, "ICIC00021", "8.45 %")
let kotak_bank = new Bank("Kotak Bank", "Satara", 56432145, "KO000032", "8.72 %")
let hdfc_bank = new Bank("HDFC Bank", "Nasik", 2234267990, "HDFC000231", "8.01 %" )
let punjab_bank = new Bank("Punjab Bank", "Ludhiana", 445563667, "PUN000978", "9.02 %")
console.log(``);

console.log(`b) Create objects and log on console\n`);
console.log("   Object axis_bank is =>", axis_bank);
console.log("   Object sbi_bank is =>", sbi_bank);
console.log("   Object icici_bank is =>", icici_bank);
console.log("   Object kotak_bank is =>", kotak_bank);
console.log("   Object hdfc_bank is =>", hdfc_bank);
console.log("   Object punjab_bank is =>", punjab_bank);
console.log(``);

console.log(`c) Add all the elements in array and Traverse this array using "for of" loop and log bank name and location on console\n`);

const ObjArray = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank]
for (const element of ObjArray) {
    console.log(`   Bank name and location are --> ${element.bank_name} , ${element.location}`);
}
console.log(``);
console.log(`d) From the array Step (c) find the object of Kotak Bank using "for of" loop\n`);

for (const element of ObjArray) {
    if(element.bank_name=="Kotak Bank"){
    console.log("  ",element);   
    }
}
console.log(``);

console.log(`e) Log the details on console using for loop\n`);
for(let index=0; index<ObjArray.length; index++){
    const element = ObjArray[index];
    console.log("  ",element);
}





