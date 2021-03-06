var Campground = require("../models/campground");
var Comment = require("../models/comment");
var mw = {};

/** check if user is logged in **/
mw.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "Please Login first");
    res.redirect("/login");
};

/** check if user is the creator of the campground **/
mw.isCampgroundOwner = function (req, res, next) {
    if(req.isAuthenticated()) {
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
                if(campgroundId.author.id.equals(req.user._id)) {
                    next();
                }
                else {
                    req.flash("error", "You don't have permission");
                    res.redirect("back");
                }
            }
        });
    }
    else {
        req.flash("error", "Please Login first");
        res.redirect("back");
    }
};

/** check if comment is by current user */
mw.isCommenter = function (req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, commentId) {
            if (err) {
                if(!commentId) {
                    req.flash("error", "Comment not found");
                }
                else {
                    req.flash("error", "Something went wrong");
                }
                console.log(err);
                res.redirect("back");
            }
            else {
                if(commentId.author.id.equals(req.user._id)) {
                    return next();
                }
                else {
                    req.flash("error", "You don't have permission");
                    res.redirect("back");
                }
            }
        });
    }
    else {
        req.flash("error", "Please Login first");
        res.redirect("back");
    }
};

module.exports = mw;