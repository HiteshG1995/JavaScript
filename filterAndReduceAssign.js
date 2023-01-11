console.log(`***************************** Assignment (b) **********************************`);

class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro")
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS")
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy")
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro")
const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS")
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infy")

const arrayClassObj = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

console.log(`\n1) Find all the employees from "Wipro" company\n`);
const wiproEmpfilter = arrayClassObj.filter(empWipro=>{ return empWipro.emp_company=="Wipro" });
wiproEmpfilter.forEach(element => { console.log("  ",element);});

console.log(`\n2) Find all the employees from "IT" OR "HR" Department\n`);
const deptEmpfilter = arrayClassObj.filter((deptEmp)=> { return deptEmp.emp_dept=="IT" || deptEmp.emp_dept=="HR" });
deptEmpfilter.forEach(element => { console.log("  ",element); });

console.log(`\n3) Find all the employees whose empid greater than 50\n`);
const empidFilter = arrayClassObj.filter((empidCheck)=>{ return empidCheck.emp_id > 50 });
empidFilter.forEach(element => { console.log("  ",element);});

console.log(`\n4) Find all the employees whose name starts with 'A' OR 'Y' OR 'M'\n`);
const empNamefilter = arrayClassObj.filter((empNameCheck)=>{ return empNameCheck.emp_name.startsWith("A") || empNameCheck.emp_name.startsWith("V") || empNameCheck.emp_name.startsWith("M") });
empNamefilter.forEach(element => { console.log("  ",element.emp_name);});

console.log(`\n5) Find average salary of all the employees for all the department\n`);

const empSalary = arrayClassObj.filter((emptotalSal)=>{ return emptotalSal.emp_salary})
let empSalArr = []
empSalary.forEach(element => {empSalArr.push(element.emp_salary);});
console.log("  ",empSalArr);
const totalSumSal = empSalArr.reduce((totalSal, value)=>  totalSal + value ); 
console.log(`   Total Salary are: "${totalSumSal}"`)

console.log(`   Average employee salay is "${totalSumSal/empSalArr.length}"`);

console.log(`\n6) Find average salary of all the employees for all the department\n`);

const salaryOfIT = arrayClassObj.filter((emptotalSal)=>{ return emptotalSal.emp_dept == "IT"})
const salOfIT = []
salaryOfIT.forEach(element => { salOfIT.push(element.emp_salary);});
console.log("  ",salOfIT);
const totalITsalSum = salOfIT.reduce((totalITsal, value)=> totalITsal+value);
console.log(`   Total Salary of IT department are: "${totalITsalSum}"`)
console.log(`   Average employee salay is "${totalITsalSum/salOfIT.length}"`);




 