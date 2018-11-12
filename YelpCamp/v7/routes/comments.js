var express = require("express");
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var mw = require("../middleware");
var router = express.Router({mergeParams: true}); //merges the campground id to comments.js

/** add a comment form**/
router.get("/new", mw.isLoggedIn, function(req,res) {
    Campground.findById(req.params.id, function(err, campgroundId) {
        if (err || !campgroundId) {
            req.flash("error", err.message);
            res.redirect("back");
        }
        else {
            res.render("comments/new", {campground: campgroundId});
        }
    });
});

/** add a comment to a campground **/
router.post("/", mw.isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, campgroundId) {
        if (err || !campgroundId) {
            req.flash("error", err.message);
            res.redirect("back");
        }
        else {
            Comment.create(req.body.comment, function(err, comment) {
                if (err || !comment) {
                    req.flash("error", err.message);
                    res.redirect("back");
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

/** edit comment form **/
router.get("/:comment_id/edit", mw.isCommenter, function(req, res) {
    Comment.findById(req.params.comment_id, function(err, commentId) {
        if (err || !commentId) {
            req.flash("error", err.message);
            res.redirect("back");
        }
        else {
            res.render("comments/edit", {campground_id: req.params.id, comment: commentId});
        }
    });
});

/** update a comment route **/
router.put("/:comment_id", mw.isCommenter, function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, commentId) {
        if (err || !commentId) {
            req.flash("error", err.message);
            res.redirect("back");
        }
        else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

/** delete a comment **/
router.delete("/:comment_id", mw.isCommenter, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if (err) {
            req.flash("error", err.message);
            res.redirect("back");
        }
        else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

module.exports = router;