console.log(`*************************************************Assignment (a)***********************************************************\n`);

const professor = {
    Name: "Larry page",
    age: 27,
    company: "Google",
    City: 'San jose',
    height: 5.8,
    weight: 75,
        degrees:{
            engineering: "CSC",
            PHD: "Advance computing",
            postGraduation: "Quantum computer (CDAC)",
            addCert: function(){
                return this.engineering +" "+ this.PHD + " " + this.postGraduation;
            },
            certificates:{
                cloudCert: "AWS, Azure",
                languageCert: "Advance Java",
                coding: "Hacker Rank",
                course: "Certification in IFE course",
                AdvanceCert: "Certificate in Adv Programming"
            }
        }     
    }

console.log(`1) Creating and accessing of object "professor"`);
console.log(professor);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`2) Include nested object "degrees" in professor`);
console.log(professor.degrees);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`3) Creating nested object in "certificates" in degrees`);
const accessCert = professor.degrees.certificates;
console.log(accessCert);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`4) Add function as a value which should concat all degrees`);
const accessFun = professor.degrees.addCert();
console.log(professor.degrees);
console.log(accessFun);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`5) Add new property to log on consol`);
const newProp = professor.status='Married';
console.log(`Added property is "Status" --> "${newProp}"`);
console.log(professor);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`6) Modify an existing property and log an object on consol`);
const modProp = professor.City='San franscisco';
console.log(`Modified property is "city" --> "${modProp}"`);
console.log(professor);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`7) Delete any one certiicate in nested object`);
const delProp = delete professor.degrees.certificates.cloudCert;
console.log(`Deleted property is "cloudCert"--> "${delProp}"`);
console.log(professor.degrees.certificates);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`8) Add new certiicate in nested object - "Certificate"`);
const AddProp = professor.degrees.certificates.advanceCPP = "Advance C++ and Go lang";
console.log(`New certificate is "advanceCPP"--> "${AddProp}"`);
console.log(professor.degrees.certificates);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`8) Log the nested object 'certificate' on console`);
const newLog = professor.degrees.certificates
console.log(professor.degrees.certificates);
