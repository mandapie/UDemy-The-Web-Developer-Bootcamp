console.log("numbers between -10 and 19");
var number = -10;
while (number <= 19) {
    console.log(number);
    number++;
}
console.log("even numbers between 10 and 40");
number = 10;
while (number <= 40) {
    console.log(number);
    number++;
}
console.log("odd numbers between 300 and 333");
number = 301;
while (number < 334) {
    console.log(number);
    number += 2;
}
console.log("numbers divisible between 5 AND 3 between 5 and 50");
number = 5;
while (number < 51) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log(number);
        
    }
    number++;
}