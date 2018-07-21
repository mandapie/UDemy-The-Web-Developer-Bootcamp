var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/user");
var Comment = require("./models/comment");
var Campground = require("./models/campground");
var seedDB = require("./seeds");
var passport = require("passport");
var localStrat = require("passport-local");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/yelpCamp", { useNewUrlParser: true });
seedDB();

app.use(require("express-session")({
    secret: "Just A Secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrat(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// get req.user object
app.use(function(req,res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.get("/", function (req, res) {
    res.render("campgrounds/landing");
});

// show all campgrounds
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

// add a new campground
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

// add new campground form
app.get("/campgrounds/new", function (req,res) {
    res.render("campgrounds/new");
});

// show a campground with more info
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

// add a comment to a campground
app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req,res) {
    Campground.findById(req.params.id, function(err, campgroundId) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("comments/new", {campground: campgroundId});
        }
    });
});

// show all comments of a campground
app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res) {
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

// register form
app.get("/register", function(req, res) {
    res.render("register");
});

//register user
app.post("/register", function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, newUser) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/campgrounds");
        });
    });
});

// login form
app.get("/login", function(req, res) {
    res.render("login");
});

// handle login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}));

// logout
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP);