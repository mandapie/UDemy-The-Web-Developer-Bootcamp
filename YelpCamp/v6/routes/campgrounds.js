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
router.post("/", isLoggedIn, function (req, res) {
    Campground.create({
        name: req.body.name,
        image: req.body.image,
        description: req.body.desc,
        author: {id: req.user._id, username: req.user.username}
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
router.get("/new", isLoggedIn, function (req,res) {
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

/** check if user is logged in **/
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;