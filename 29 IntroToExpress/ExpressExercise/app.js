var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal;
    // var sound = "";
    // if (animal === "pig") {
    //     sound = Oink;
    // }
    // else if (animal === "cow") {
    //     sound = Moo;
    // }
    // else if (animal === "dog") {
    //     sound = Woof;
    // }
    // else if (animal === "cat") {
    //     sound = Meow;
    // }
    // else if (animal === "duck") {
    //     sound = Quack;
    // }
    
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "Meow",
        duck: "Quack"
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:string/:num", function (req, res) {
    var echo = "";
    for(var i = 0; i < Number(req.params.num); i++) {
        echo += req.params.string + " ";
    }
    res.send(echo);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP);