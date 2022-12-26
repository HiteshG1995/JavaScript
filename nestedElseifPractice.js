function marriageEligiblity(name, gender, age){

    if (age<=0 || age>120) {
        console.log(`Please provide accurate data or range`);
    }
    else if (gender=='Male' && age>=21 || age<=120) {
        console.log(`Hi "${name}" your age is "${age}", You are eligible for the marraige`);
    }
    else if (gender=='Female' && age>=18 || age<=120) {
        console.log(`Hi "${name}" your age is "${age}", You are eligible for the marraige`);
    }
    else if (gender=='Other' && age>=26) {
        console.log(`Hi "${name}" your age is "${age}", You are eligible for the marraige`);
    }
    else{
        console.log(`Hi "${name}" your age is "${age}", You are not eligible for the marraige`);
    }
}
marriageEligiblity("ABC",'Female',20)
marriageEligiblity("ABC",'Male',10)
marriageEligiblity("XYZ",'Male',121)
marriageEligiblity("ABC",'Female',20)


