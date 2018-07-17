var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campground = require("./models/campground");
var seedDB = require("./seeds");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/yelpCamp", { useNewUrlParser: true });
seedDB();

app.get("/", function (req, res) {
    res.render("campgrounds/landing");
});

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function(err, campgrounds){
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/index", {campgrounds: campgrounds});
        }
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.desc;
    Campground.create({
        name: name, image: image, description: description
    }, function(err, newCampground) {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function (req,res) {
    res.render("campgrounds/new");
});

app.get("/campgrounds/:id", function (req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, campgroundId) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/show", {campground: campgroundId});
        }
    });
});

app.get("/campgrounds/:id/comments/new", function(req,res) {
    Campground.findById(req.params.id, function(err, campgroundId) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("comments/new", {campground: campgroundId});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res) {
    Campground.findById(req.params.id, function(err, campgroundId) {
        if (err) {
            console.log(err);
        }
        else {
            Comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                }
                else {
                    campgroundId.comments.push(comment);
                    campgroundId.save();
                    res.redirect("/campgrounds/" + campgroundId._id);
                }
            });
        }
    });
});

app.listen(process.env.PORT, process.env.IP);