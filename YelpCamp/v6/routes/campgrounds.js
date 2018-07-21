var express = require("express");
var Campground = require("../models/campground");
var router = express.Router();

/** show all campgrounds **/
router.get("/", function (req, res) {
    Campground.find({}, function(err, campgrounds){
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/index", {campgrounds: campgrounds});
        }
    });
});

/** add a new campground **/
router.post("/", function (req, res) {
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

/** add new campground form **/
router.get("/new", function (req,res) {
    res.render("campgrounds/new");
});

/** show full details of a campground **/
router.get("/:id", function (req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, campgroundId) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/show", {campground: campgroundId});
        }
    });
});

module.exports = router;