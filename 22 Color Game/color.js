var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var answer = document.getElementById("answer");
var msg = document.getElementById("message");
answer.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // initialize colors
    squares[i].style.backgroundColor = colors[i];
    // click listeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            msg.textContent = "Correct!";
            changeColor(pickedColor);
        }
        else {
            msg.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}