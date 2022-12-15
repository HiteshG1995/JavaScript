var strTempAssign = function(){
    var companyName = 'Infy'
    var MyHobby1 = 'Travelling'
    var MyHobby2 = ' Swimming'
    var MyHobby3 = ' Reading'

    var substution = MyHobby1+MyHobby2+MyHobby3;
    var Concatenation = MyHobby1.concat(MyHobby2).concat(MyHobby3);


    console.log(`#1 My dream company is: "${companyName}"\n`);
    console.log(`#2 2.1 [Using variable substution]---------> My Hobbies are "${substution}"\n`)
    console.log(`   2.2 [Concat the hobbies in one string]--> My Hobbies are "${Concatenation}"`)

}

strTempAssign()