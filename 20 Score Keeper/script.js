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
    p1Points = addPoint(p1Points, p1Score);
});

p2.addEventListener("click", function () {
    p2Points = addPoint(p2Points, p2Score);
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

function addPoint(point, score) {
    if (!gameOver) {
        point++;
        if (point == winningPoint.textContent) {
            score.classList.add("green");
            gameOver = true;
        }
        score.textContent = point;
    }
    return point;
}