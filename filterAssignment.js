console.log(`***************************** Assignment (a) **********************************\n`);

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

const arrayfilterEmp = arrayClassObj.filter((employee)=>{
      return employee.emp_company=="TCS"
});
arrayfilterEmp.forEach((element) => {
    console.log("Employee Name:=>",element.emp_name, "Company:=>",element.emp_company);
});