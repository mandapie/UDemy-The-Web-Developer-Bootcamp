var header = document.getElementById("header");
var newGame = document.getElementById("newGame");
var msg = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var answer = document.getElementById("answer");
var mode = document.getElementsByClassName("mode");

var num = 6;
var colors = [];
var pickedColor;

init();

function init() {
    setupMode();
    setupSquares();
    reset();
}

function setupSquares() {
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
}

function setupMode() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? num = 3 : num = 6;
            reset();
        });
    }
}

newGame.addEventListener("click", function () {
    reset();
});

function reset() {
    newGame.textContent = "New Colors";
    msg.textContent = "";
    colors = generateColors();
    pickedColor = pickColor();
    answer.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
}

function generateColors() {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}