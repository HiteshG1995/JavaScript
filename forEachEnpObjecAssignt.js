console.log(`\n*************************************** Assignment (0A) *********************************************`);

class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id
        this.emp_name=emp_name
        this.emp_dept=emp_dept
        this.emp_salary=emp_salary
        this.emp_company=emp_company
    }
}
const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro")
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS")
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy")
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro")
const emp_viny = new Employee (88, "Viny", "IT", 75000, "TCS")
const emp_mahi = new Employee (99, "Mahi", "HR", 85000, "Infy")

const arrayEmpObj = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

console.log(`\n1) Employees whose salary is greater than 50000 are given below\n`);
arrayEmpObj.forEach((arrayVal) => {
if(arrayVal.emp_company=="TCS"){
        console.log(`   Name of company:=> "${arrayVal.emp_name}" and company is:=> "${arrayVal.emp_company}"`);
    }
});

console.log(`\n2) Employees whose salary is greater than 50000 are given below\n`);

arrayEmpObj.forEach(arrayVal => {
    if(arrayVal.emp_salary >= 50000){
        console.log(`   Name of employee is:=> "${arrayVal.emp_name}" and salary is:=> "${arrayVal.emp_salary}"`);
    }
});

console.log(`\n3) Sum of all salaries of an employess are given below\n`);

sum=0;
arrayEmpObj.forEach(arrayVal => {
    sum += arrayVal.emp_salary
});
console.log(`   Sum of all salaries of employees are: => "${sum}"`);

console.log(`\n4) Average salaries of all employess are given below\n`);

sum=0;
arrayEmpObj.forEach((arrayVal, index) => {
    total = sum += arrayVal.emp_salary
    Avg = sum/(index + 1)
    totalEmp = index + 1
});
console.log(`   Total Employess are ${totalEmp}`);
console.log(`   Average salary is:> "${Avg}"`);
console.log(`   Converting Average floating salary to integer:=> "${parseInt(Avg)}"`);

console.log(`\n5) Find 'IT' OR 'HR' department employees whose salary greater than 75000 and log on console\n`);

console.log(`   **Employess from IT and HR department only whose salary greater and equal to 75000**`);
arrayEmpObj.forEach((arrayVal) => {
    if(arrayVal.emp_dept=="IT" || arrayVal.emp_dept=="HR" && arrayVal.emp_salary >= 75000){
            console.log("   ",arrayVal.emp_id, arrayVal.emp_name, arrayVal.emp_dept, arrayVal.emp_company ,arrayVal.emp_salary);
    }
});





