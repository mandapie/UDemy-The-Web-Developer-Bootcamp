console.log("numbers between -10 and 19");
for (number = -10; number < 20; number++) {
    console.log(number);
}
console.log("even numbers between 10 and 40");
for (number = 10; number < 41; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}
console.log("odd numbers between 300 and 333");
for (number = 301; number < 334; number++) {
    if (number % 2 === 1) {
    console.log(number);
    }
}
console.log("numbers divisible between 5 AND 3 between 5 and 50");
for (number = 5; number < 51; number++)  {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log(number);
    }
}