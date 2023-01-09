console.log(`******************************************************* Assignment (a) ****************************************************************`);
console.log(`\na) Add data members in class.\n`);

class Details {
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName=bankName
        this.location=location
        this.accountNo=accountNo
        this.ifsc=ifsc
        this.interestRate=interestRate
    }
}
const axis_bank = new Details("Axis Bank", "Kolhapur", 453763859, "AXIS00221", "6.98 %")
const sbi_bank = new Details("SBI Bank", "Mumbai", 436484937, "SBIN00023", "8.60 %")
const icici_bank = new Details("ICICI Bank", "Airoli", 93746392,"ICICI000123", "7.98 %")
const kotak_bank = new Details("Kotak Bank", "Satara", 0873628, "KO002343", "8.90 %")
const hdfc_bank = new Details("HDFC Bank", "Nasik", 09364127, "HDFC002391", "7.75 %")
const punjab_bank = new Details("Punjab Bank", "Nanded", 78836648, "PUN000693", "8.20 %")

console.log(`b) Create objects for each bank and display on console.\n`);

let arrayObj1 = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank]
for (const iterator of arrayObj1) {
    console.log(`  ${iterator.bankName}`,iterator);
}

console.log(`\nc) Created a Map in such that key should be accountNo and value is object created in 'step (b).'\n`);

const mapOfBankDetails = new Map();

mapOfBankDetails.set(axis_bank.accountNo, axis_bank)
mapOfBankDetails.set(436484937, sbi_bank)
mapOfBankDetails.set(93746392, icici_bank)
mapOfBankDetails.set(0873628, kotak_bank)
mapOfBankDetails.set(09364127, hdfc_bank)
mapOfBankDetails.set(78836648, punjab_bank)

console.log(`   Create a Map and log "accountNo" as a key and "Object" as a value`);
console.log("   Keys of Map", mapOfBankDetails.keys())
console.log("   Values of Map", mapOfBankDetails.values())
console.log("  ",mapOfBankDetails);

console.log(`\nd)Traversed the map and log details such as bankName, accountNo and interestRate for each Object\n`);

mapOfBankDetails.forEach(element => {
    console.log(`   Bank Details => Bank Name is: "${element.bankName}" | A/c Number: "${element.accountNo}" | Interest Rate is: "${element.interestRate}"`);
});
