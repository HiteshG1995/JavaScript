console.log(`********************************Assignment 1 (a)*********************************************\n`);

var checkAge = function (age) {
  if (age >= 18 && age < 120)  {
    console.log(`Age is "${age}" eligible for Vote`);
  }
  if (age < 18 && age >0) {
    console.log(`Age is "${age}" not eligible for Vote`);
  }
  if (age <= 0 || age > 120) {
    console.log(`Age is "${age}" invalid data`);
  }
};
checkAge(47);
checkAge(17);
checkAge(8);
checkAge(20);
checkAge(-10);
checkAge(200);
checkAge(0);

console.log(`\n********************************Assignment 1 (b)*********************************************\n`);

function gradeCalculation(marks){

    if (marks >= 90 && marks <= 100){
        console.log(`Funtastic marks: "${marks}%", Your grade is A+.`);
    }
    if (marks >= 75 && marks < 90){
        console.log(`Excellent marks: "${marks}%", Your grade is A.`);
    }
    if (marks >= 50 && marks < 75){
        console.log(`Good marks: "${marks}%", Your grade is B.`);
    }
    if (marks >= 35 && marks < 50){
        console.log(`Passing marks: "${marks}%", Your grade is C, Needs improvement.`);
    }
    if (marks < 35 && marks > 0){
        console.log(`Marks is: "${marks}%", sorry you are fail, please try again.`);
    }
    if (marks <= 0 || marks > 100){
        console.log(`Marks is: "${marks}", please provide valid marks.`);
    }

}
gradeCalculation(100);
gradeCalculation(99);
gradeCalculation(90);
gradeCalculation(85);
gradeCalculation(75);
gradeCalculation(65);
gradeCalculation(50);
gradeCalculation(38);
gradeCalculation(35);
gradeCalculation(25);
gradeCalculation(0);
gradeCalculation(105);
gradeCalculation(-345);

console.log(`\n*****************************************************************************************\n`);














