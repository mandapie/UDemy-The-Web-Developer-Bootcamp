var age = prompt("What is your age?");
var currentYear = (new Date()).getFullYear();
var leapYears = 0;
var yearBorn = currentYear - age;
for (currentYear; currentYear > yearBorn; currentYear--) {
    if (currentYear % 4 == 0) {
        leapYears += 1;
    }
}
var days = age * 365 + leapYears;
alert(age + " years is roughly " + days + " days");

// SOLUTION
// var days = age * 365.25 --> to avg the out the years including leap years