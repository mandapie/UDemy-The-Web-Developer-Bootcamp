var express = require("express");
var Campground = require("../models/campground");
var mw = require("../middleware");
var nodeGeocoder = require("node-geocoder");
var router = express.Router();
var geocoder = nodeGeocoder({
    provider: 'google',
    httpAdapterL: 'https',
    apikey: process.env.GEOCODER_API_KEY,
    formatter: null
});

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
    geocoder.geocode(req.body.location, function(err, data) {
        if(err || !data.length) {
            req.flash("error", "invalid address");
            return res.redirect("back");
        }
        var lat = data[0].latitude;
        var long = data[0].longtitude;
        var location = data[0].formattedAddress;
        
        Campground.create({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            description: req.body.desc,
            author: {id: req.user._id, username: req.user.username},
            location: location,
            long: long,
            lat: lat
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
    geocoder.geocode(req.body.location, function(err, data) {
        if (err || !data.length) {
          req.flash('error', 'Invalid address');
          return res.redirect('back');
        }
        req.body.campground.lat = data[0].latitude;
        req.body.campground.long = data[0].longitude;
        req.body.campground.location = data[0].formattedAddress;
        
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