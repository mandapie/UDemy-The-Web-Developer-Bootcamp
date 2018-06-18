var answer = prompt("are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }
// alert("YAY, WE MADE IT!!!");

// --------------------------------------------------------

// if(answer === "yes" || answer === "yeah") {
// 	alert("YAY, We made it!")
// }
// else {
// 	var answer = prompt("are we there yet?");
// }

// BONUS ---------------------------------------------------
// while "yes" is not in the input String
while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");