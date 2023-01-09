// console.log(`4) Identify Prime number`);
// console.log(``);
// function primeCheck(num){

//     if (num<=0) {
//         console.log(`${num} is not valid`);
//     }else if(num>1){
//         for (let index = 2; index < num; index++)
//             if(num%index==0){
//                 console.log(`${num} is not prime`);
//                 break;
//                 }
//     }else
//         console.log(`${num} is prime`);

// }

// primeCheck(29)
// primeCheck(27)
// primeCheck(28)
// primeCheck(2)
// primeCheck(1)
// primeCheck(-10)
// primeCheck(0)


// function prime(num) {
//   var prime = true;
//   if (num < 0) {
//     console.log("not valid number");
//   } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         prime = false;
//       }
//     }
//     if (prime) {
//       console.log(`Given mumber "${num}" is prime number`);
//     } else {
//       console.log(`Given number "${num}" is not prime number`);
//     }
//   } else {
//     console.log(
//       `given number "${num}" is neighter prime number nor composite number`
//     );
//   }
// }
// prime(4);
// prime(1);
// prime(27);
// prime(0);
// prime(29);




function prime2(num2){
  var prime2 = true;
  if(num2<0){
    console.log(`Number ${num2} is not valid`);
  }else if(num2>1){
    for(let index=2; index<num2; index++){
        if(num2%index==0)
        prime2=false
    }if(prime2){
    console.log(`Number ${num2} is prime`) 
    }else{
    console.log(`Number ${num2} is not prime`);
    }

  }else
    console.log(`Number is ${num2} is neighter prime nor composite`);

  }
  prime2(27)
  prime2(1)



