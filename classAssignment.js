console.log(`1) Define class for the vechicle and initilize data member in constructor and log in console\n`);

class Vechical{
    constructor(color, brand, type, size, numberPlate){
        this.color=color
        this.brand=brand
        this.type=type
        this.size=size
        this.numberPlate=numberPlate

    }
}
let newTATA = new Vechical("red","TATA","Truck","Extra large",8796)
let newBMW = new Vechical("Blue","BMW","Car","Medium",8742)
let newAudi = new Vechical("Black","Audi","Car","Medium",5400)
let newVolvo = new Vechical("Green","Volvo","Bus","large",56421)
let newTVS = new Vechical("White","TVS","Bike","Small",5432)

console.log(newTATA);
console.log(newBMW);
console.log(newAudi);
console.log(newVolvo);
console.log(newTVS);

console.log(`\n2) Define a class College with attributes, constructor and member function details() to invoke each object\n`);

class College{
    constructor(collegeName, Rank, Department, Address, Pinode){

            this.collegeName=collegeName,
            this.Rank=Rank,
            this.Department=Department,
            this.Address=Address,
            this.Pinode=Pinode
    }
      details() {
            console.log(this.collegeName, this.Rank, this.Department, this.Address, this.Pinode);
       }    
}

let newPCCOE = new College("#1 PCCOE",23,"Engineering","Pune",421101)
let newSinhga = new College("#2 Sinhgad", 102, "MBA", "Nasik", 43251)
let newVIT = new College("#3 VIT", 48, "Engineering and Research", "Mumbai", 56437)
let newCOEP = new College("#4 COEP", 32, "Research", "Pune Main", 43558)

newPCCOE.details()
newSinhga.details()
newVIT.details()
newCOEP.details()

console.log(`\n3) Traverse an object using for In loop function\n`);

function traverseObject(ObjectValue){

        for (const key in ObjectValue) {
            if (Object.hasOwnProperty.call(ObjectValue, key)) {
                const element = ObjectValue[key];
                console.log(`${key} ${element}`);
                
            }
        }
}
traverseObject(newPCCOE)
console.log(``);
traverseObject(newSinhga)
console.log(``);
traverseObject(newVIT)
console.log(``);
traverseObject(newCOEP)


