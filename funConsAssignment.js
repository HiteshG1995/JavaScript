console.log(`****************************** Constructor function Assignment ****************************************\n`);

console.log(`1) Create constructor function with data members\n`);
console.log(`2) Create each object for bank and log the bank details on console`);

function Bank(bankName, location, ifscCode, brachCode){
    this.bankName=bankName
    this.location=location
    this.ifscCode=ifscCode
    this.brachCode=brachCode

    console.log(`Bank details are--->Bank Name: ${bankName}, Location: ${location}, IFSC: ${ifscCode}, Branch Code: ${brachCode}`);
}

let yesBank = new Bank("Yes Bank", "Pune", "YES00043", 43210)
let sbiBank = new Bank("SBI Bank", "Mumbai", "SBIN00023", 412101)
let mahBank = new Bank("Maharastra Bank", "Airoli","MAHA000123", 42230 )
let axisBank = new Bank("Axis Bank", "Kolhapur", "AXIS00221", 43672)
console.log(``);
console.log(yesBank);
console.log(sbiBank);
console.log(mahBank);
console.log(axisBank);
console.log(``);
Bank.prototype.openTime = "9 AM IST"
Bank.prototype.closeTime = "6 PM IST"
console.log(`3) Add new data member Open: ${Bank.prototype.openTime}`);
console.log(``);
console.log(`4) Add new data member Close: ${Bank.prototype.closeTime}`);
console.log(``);
console.log(`5) log meaningful message for object SBI Bank`);
console.log(`   Open time of SBI bank is "${sbiBank.openTime}" and close time is "${sbiBank.closeTime}"`);
console.log(``);
console.log(`6) log bankName and closeTime for AXIS bank`);
console.log(`   The open time of "${axisBank.bankName}" is "${axisBank.openTime}" and close time is "${Bank.prototype.closeTime}"`);
console.log(``);
console.log(`7) log bankName, branchCode, openTime of object Yes bank`);
console.log(`   Yes bank details are--> Bank Name: "${yesBank.bankName}", IFSC code:"${yesBank.ifscCode}" & Open time is => "${Bank.prototype.openTime}"`);










