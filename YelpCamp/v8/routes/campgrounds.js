var express = require("express");
var Campground = require("../models/campground");
var mw = require("../middleware");
var nodeGeocoder = require("node-geocoder");
var router = express.Router();
var options = {
    provider: 'google',
    httpAdapterL: 'https',
    apikey: process.env.GEOCODER_API_KEY,
    formatterL null
}

/** show all campgrounds **/
router.get("/", function (req, res) {
    Campground.find({}, function(err, campgrounds){
        if (err) {
            req.flash("error", "Something went wrong");
            console.log(err);
            res.redirect("back");
        }
        else {
            res.render("campgrounds/index", {campgrounds: campgrounds, page: 'campgrounds'});
        }
    });
});

/** add new campground form **/
router.get("/new", mw.isLoggedIn, function (req,res) {
    res.render("campgrounds/new");
});

/** add a new campground **/
router.post("/", mw.isLoggedIn, function (req, res) {
    Campground.create({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        description: req.body.desc,
        location: req.body.location,
        author: {id: req.user._id, username: req.user.username}
    }, function(err, newCampground) {
        if(err) {
            req.flash("error", "Something went wrong");
            console.log(err);
            res.redirect("back");
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

/** show full details of a campground **/
router.get("/:id", function (req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, campgroundId) {
        if (err || !campgroundId) {
            if(!campgroundId) {
                req.flash("error", "Campground not found");
            }
            else {
                req.flash("error", "Something went wrong");
            }
            console.log(err);
            res.redirect("back");
        }
        else {
            res.render("campgrounds/show", {campground: campgroundId});
        }
    });
});

/** edit a campground form **/
router.get("/:id/edit", mw.isCampgroundOwner, function(req, res) {
    Campground.findById(req.params.id, function(err, campgroundId) {
        if (err || !campgroundId) {
            if(!campgroundId) {
                req.flash("error", "Campground not found");
            }
            else {
                req.flash("error", "Something went wrong");
            }
            console.log(err);
            res.redirect("back");
        }
        else {
            res.render("campgrounds/edit", {campground: campgroundId});
        }
    });
});

/** update a campground **/
router.put("/:id", mw.isCampgroundOwner, function(req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, campgroundId) {
        if (err || !campgroundId) {
            if(!campgroundId) {
                req.flash("error", "Campground not found");
            }
            else {
                req.flash("error", "Something went wrong");
            }
            console.log(err);
            res.redirect("back");
        }
        else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

/** delete a campground **/
router.delete("/:id", mw.isCampgroundOwner, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            req.flash("error", "Something went wrong");
            console.log(err);
            res.redirect("back");
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;