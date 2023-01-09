console.log(`*************Using while loop*****************`);

console.log(`\nPrint number 5 to 15\n`);

var i = 5
while (i<=15) {
    console.log(i);
    i++;    
}

console.log(`\nPrint number 50 to 40\n`);

var i=50
while (i>=40) {
    console.log(i);
    i--;
}

console.log(`\nPrint first 15 odd number\n`);

var i=1
while (i<30) {
    console.log(i);
    i=i+=2;
    
}

console.log(`\nPrint first 15 even number\n`);

var i=0
while (i<30) {
    console.log(i);
    i=i+2;
}

console.log(`\n*************Using do while loop*****************`);


console.log(`\nPrint table from 5 to 50\n`);

var index=5
do {
    console.log(index);
    index=index+5;
} while (index<=50);



console.log(`\nPrint table from 10 to 100\n`);

var index=10
do {
    console.log(index);
    index=index+10
} while (index<=100);

console.log(`\nPrint reverse order from 100 to 10\n`);

var index=100
do {
    console.log(index);
    index=index-10
} while (index>=10);

