console.log(`*************** Identify leap year ****************\n`);
function leapYear(year){

    if(year<=0){
        console.log(`${year} is not a valid year`)
    }else if(year%4==0 && year%100!==0 || year%400==0){
        console.log(`Year is "${year}": this is leap year`);
    }
    else{
        console.log(`Year is "${year}": Not a leap year`);
    }
}
leapYear(2000)
leapYear(1999)
leapYear(-100)
leapYear(2022)
leapYear(2004)
leapYear(2023)
leapYear(0)
leapYear(2008)
leapYear(2020)


