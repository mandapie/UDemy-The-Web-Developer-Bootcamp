var age = prompt("What is your age?");
if (age < 0) {
    console.log("Error! This is not a valid input")
}
if (age == 21) {
    console.log("happy 21st birthday!");
}
if (age % 2 == 1) {
    console.log("your age is odd!");
}
//Solution: if(age % Math.sqrt(age) === 0)
if (Math.sqrt(age) % 1 === 0 && age != 1) {
    console.log("perfect square!");
}