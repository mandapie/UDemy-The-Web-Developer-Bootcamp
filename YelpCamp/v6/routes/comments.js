var express = require("express");
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var router = express.Router({mergeParams: true}); //merges the campground id to comments.js

/** add a comment to a campground **/
router.get("/new", isLoggedIn, function(req,res) {
    Campground.findById(req.params.id, function(err, campgroundId) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("comments/new", {campground: campgroundId});
        }
    });
});

/** show all comments of a campground **/
router.post("/", isLoggedIn, function(req, res) {
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
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campgroundId.comments.push(comment);
                    campgroundId.save();
                    res.redirect("/campgrounds/" + campgroundId._id);
                }
            });
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