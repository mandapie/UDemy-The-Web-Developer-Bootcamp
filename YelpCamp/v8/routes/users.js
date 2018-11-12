var express = require("express");
var User = require("../models/user");
var router = express();

router.get("/:id", function(req, res) {
    User.findById(req.params.id, function(err, userId) {
        if (err || !userId) {
            if (err) {
                req.flash("error", "something went wrong");
            }
            else if (!userId) {
                req.flash("error", "user not found");
            }
            console.log(err);
            res.redirect("back");
        }
        else {
            res.render("/users/show", {user: userId});
        }
    });
});

module.exports = router;