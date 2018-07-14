var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there");
});

app.get("/bye", function (req, res) {
    res.send("bye");
});

app.get("/dog", function(req, res) {
    res.send("bork bork");
});

app.get("/r/:subRedditName", function (req, res) {
    res.send("welcome to " + req.params.subRedditName);
});

app.get("/r/:subRedditName/comments/:id/:comment", function (req, res) {
    console.log(req.params);
});

app.get("*", function (req, res) {
    res.send("page doesn't exists");
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server has started");
    console.log("Link: https://the-web-dev-bootcamp-ecromaniac.c9users.io/");
});