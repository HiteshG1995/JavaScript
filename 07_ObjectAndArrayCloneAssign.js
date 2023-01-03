console.log(`******************************** Assignment (a) Object and Array cloning operations ***********************************\n`);

console.log(`1) Perform shallow clone on arrayNums, and update cloned array value using push() and log orignal and cloned on console`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(``);
console.log(`   Orignal array before shallow cloing`);
console.log(arrayNums);
let cloneNums = arrayNums 
console.log(`   Cloned array before update`);
console.log(cloneNums);
console.log(`   Update 55 & 66 in cloned array using push method`);
cloneNums.push(55,66)
console.log(cloneNums);
console.log(`   Display orignal array after update 55 & 66 in cloned array`);
console.log(arrayNums);
console.log(``);

console.log(`2) Perform deep clone using spread operator, Update orignal array with values 10, 25 at last position and log orignal and cloned array on console`);
console.log(``);
let arrayNums1 = [20, 3, 4, 56, 90, 400, 49]
console.log(`   Display orignal array after update "10,25"`);
let cloneNums1 = [...arrayNums1]
arrayNums1.push(10,25)
console.log(arrayNums1);
console.log(`   Display cloned array after update "10,25"`);
console.log(cloneNums1);
console.log(``);

console.log(`3) Create new array arrayEven and Merge and concat 2 arrays with arrayNum using spread operator and log on console`);
console.log(``);
let arrayEven = [2, 30, 14, 8]
let arrayNums2 = [20, 3, 4, 56, 90, 400, 49]
console.log(`   Combine 2 arrays using spread operator`);
let arrayCombine = [...arrayEven, ...arrayNums2]
console.log(arrayCombine);
console.log(``);

console.log(`4) Create "employee_info" object and display on console`);
console.log(``);
console.log(`   Object employee_info`);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,000 INR",
        aug_month: "50,000 INR",
        jun_month: "65,000 INR"
    },
    address: {
        locality:{
            colony: "OM Vrindavan Sociaty",
            street: "Kanch Pokli, 41202",
        },
        city: "Mumbai",
        state: "Maharastra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "| 1800- 4567 32", "| +91 9096 5678 77"]

}
console.log(employee_info);
console.log(``);

console.log(`5) Log the employee details on console using object and nested objects`);
console.log(``);
console.log(`   *********Here are the details of Employee***********\n`);
console.log(`   a) Address of "${employee_info.emp_name}" is => Colony: ${employee_info.address.locality.colony}, City: ${employee_info.address.city}, State: ${employee_info.address.state}, Country: ${employee_info.address.country} `);
console.log(`   b) Mobile numbers of "${employee_info.emp_name}"=> are [${employee_info.mobiles}]`);
console.log(``);

console.log(`6) Perform deep copy using JASON stringfy()`);
console.log(``);
console.log(`   a) Update property "july_month" salary to 80K on cloned object"`);
let newEmployee = JSON.parse(JSON.stringify(employee_info))
console.log(`New cloned object:`);
console.log(newEmployee);
console.log(`      Update property of july_month "salary"`);
console.log(newEmployee.salary.july_month = "80,000 INR");
console.log(`   b) Update property "country" to "United Kingdom" on orignal object`);
console.log(employee_info.address.country = "United Kingdom");
console.log(``);

console.log(`   c)Log updated values for orignal and cloned objects on console`);
console.log(`     Updated values of orignal object`);
console.log(newEmployee.salary);
console.log(`     Updated values of cloned object`);
console.log(employee_info.address);


