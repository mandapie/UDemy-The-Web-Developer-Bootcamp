var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var winningPoint = document.getElementById("points");
var numInput = document.querySelector("input");
var p1Points = 0, p2Points = 0;
var gameOver = false;

numInput.addEventListener("change", function () {
    winningPoint.textContent = numInput.value;
});

p1.addEventListener("click", function () {
    if (!gameOver) {
        p1Points++;
        if (p1Points == winningPoint.textContent) {
            p1Score.classList.add("green");
            gameOver = true;
        }
        p1Score.textContent = p1Points;
    }
});

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2Points++;
        if (p2Points == winningPoint.textContent) {
            p2Score.classList.add("green");
            gameOver = true;
        }
        p2Score.textContent = p2Points;
    }
});

reset.addEventListener("click", function () {
    p1Points = 0;
    p1Score.textContent = p1Points;
    p1Score.classList.remove("green");
    p2Points = 0;
    p2Score.textContent = p2Points;
    p2Score.classList.remove("green");
    gameOver = false;
});