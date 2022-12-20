console.log(`********************************Assignment 1 (a)*********************************************\n`);

var checkAgeVoting = function (age) {

    if (age <= 0 || age > 120 || (typeof age)!=="number") {
        console.log(`You have provided "${age}" which is invalid content or range, Please provide valid data.`)
    } else { 
        console.log(`You have provided age "${age}" after verification...`);

        if (age >= 18 && age < 120) {
            console.log(`Yes you are eligible for the Vote.`);

        }else{
            console.log(`Sorry you are not eligible for vote.`);
         }
       }
    }
checkAgeVoting(45);
checkAgeVoting(17);
checkAgeVoting(8);
checkAgeVoting(20);
checkAgeVoting(-10);
checkAgeVoting(200);
checkAgeVoting(0);
checkAgeVoting('fourty');
checkAgeVoting(true);

console.log(`\n********************************Assignment 1 (b)*********************************************\n`);

var checkGradeCalculation = function(marks){ 
if (marks <= 0 || marks > 100 || (typeof marks)!=="number") {
    console.log(`You have provided marks "${marks}" which is invalid content or range, Please provide valid data.`)
} else { 
    console.log(`You have provided marks "${marks}" after verification...`);

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
   }}
checkGradeCalculation(98);
checkGradeCalculation(80);
checkGradeCalculation(90);
checkGradeCalculation(0);
checkGradeCalculation(150);
checkGradeCalculation(-7);
checkGradeCalculation(35);
checkGradeCalculation(29);
checkGradeCalculation(64);
checkGradeCalculation(49);
checkGradeCalculation("91");
checkGradeCalculation('Eighty');
checkGradeCalculation(true);










