var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Transilvania", image: "https://www.photosforclass.com/download/flickr-6784772714"},
        {name: "Yappy Samper", image: "https://www.photosforclass.com/download/flickr-2671761063"},
        {name: "IDK Town", image: "https://www.photosforclass.com/download/flickr-2673856940"},
        {name: "I'm Batman", image: "https://www.photosforclass.com/download/flickr-6037745154"},
        {name: "Baby Tony Too", image: "https://www.photosforclass.com/download/flickr-2671765705"}
    ];

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("campgrounds");
});

app.get("/campgrounds/new", function (req,res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP);