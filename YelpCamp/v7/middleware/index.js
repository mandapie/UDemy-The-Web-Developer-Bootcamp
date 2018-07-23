var Campground = require("../models/campground");
var Comment = require("../models/comment");
var mw = {};

/** check if user is logged in **/
mw.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

/** check if user is the creator of the campground **/
mw.isCampgroundOwner = function (req, res, next) {
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, campgroundId) {
            if (err) {
                res.redirect("back");
            }
            else {
                if(campgroundId.author.id.equals(req.user._id)) {
                    next();
                }
                else {
                    res.redirect("back");
                }
            }
        });
    }
    else {
        res.redirect("back");
    }
};

/** check if comment is by current user */
mw.isCommenter = function (req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, commentId) {
            if (err) {
                res.redirect("back");
            }
            else {
                if(commentId.author.id.equals(req.user._id)) {
                    return next();
                }
                else {
                    res.redirect("back");
                }
            }
        });
    }
    else {
        res.redirect("back");
    }
};

module.exports = mw;