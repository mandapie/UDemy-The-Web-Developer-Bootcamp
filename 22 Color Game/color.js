var header = document.getElementById("header");
var newGame = document.getElementById("newGame");
var msg = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var answer = document.getElementById("answer");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

var num = 6;
var colors = generateColors(num);
var pickedColor = pickColor();
answer.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // initialize colors
    squares[i].style.backgroundColor = colors[i];
    // click listeners
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            msg.textContent = "Correct!";
            changeColor(clickedColor);
            header.style.backgroundColor = clickedColor;
            newGame.textContent = "Play Again?";
        }
        else {
            msg.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}

newGame.addEventListener("click", function () {
    newGame.textContent = "New Colors";
    colors = generateColors(num);
    pickedColor = pickColor();
    answer.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    newGame.textContent = "New Colors";
    num = 3;
    colors = generateColors(num);
    pickedColor = pickColor();
    answer.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    newGame.textContent = "New Colors";
    num = 6;
    colors = generateColors(num);
    pickedColor = pickColor();
    answer.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

function generateColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}