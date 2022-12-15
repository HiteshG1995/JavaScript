console.log(`**************************************Assignment 2*********************************************\n`);

var maleMarriageEligiblity = function(gender, age, boyName){
    var rel = (gender = 'Male' && age >=21) ? "you are eligible" : "sorry you are not eligible";
    console.log(`Hey, "${boyName}" ${rel} for the Marriage.`);
}
maleMarriageEligiblity("Male",25,"Billgates");
maleMarriageEligiblity("Male",17,"Steve Jobs");

console.log(`-----------------------------------------------------------------------------------------------`);

var femaleMarriageEligiblity = function(gender, age, girlName){
    var rel2 = (gender = 'feMale' && age >=18) ? "you are eligible" : "sorry you are not eligible";
    console.log(`Hey, "${girlName}" ${rel2} for the Marriage.`);
}
maleMarriageEligiblity("female",16,"Jennifer");
maleMarriageEligiblity("female",27,"Malinda Gates");