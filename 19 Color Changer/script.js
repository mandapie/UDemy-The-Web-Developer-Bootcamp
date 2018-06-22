var btn = document.getElementById("btn");
var body = document.querySelector("body");

btn.addEventListener("click", function () {
    body.classList.toggle("purple");
});