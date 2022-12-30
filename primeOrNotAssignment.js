
console.log(`4) Identify Prime number`);
console.log(``);
function primeCheck(num){
    
    let prime = true;
    if (num<0) {
        console.log(`${num} is not valid`);
        return num
    }
    else if (num===1 || num==0) {
        console.log(`${num} is not prime`);
        return num
    
    }else if(num>1)
    {
        for (let index = 2; index < num; index++) {
            if(num%index!==0)      
            prime=true;
            break
        }
    }
    if (prime) {
        console.log(`${num} is prime`);
    }else{
        console.log(`${num} is not prime`);
    }

}
primeCheck(29)
primeCheck(27)
primeCheck(28)
primeCheck(2)
primeCheck(1)
primeCheck(-10)
primeCheck(0)




