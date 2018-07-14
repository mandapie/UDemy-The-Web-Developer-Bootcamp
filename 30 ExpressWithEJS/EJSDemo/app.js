var express = require("express");
var app = express();

app.use(express.static("public")); //tells server to serve public folder
app.set("view engine", "ejs"); //tells server that files in views are .ejs files

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/fellinlove/:thing", function (req, res) {
    res.render("love", {thingVar: req.params.thing});
});

app.get("/posts", function (req, res) {
    var posts = [
        {title: "Post 1", author: "david"},
        {title: "Post 2", author: "dave"},
        {title: "Post 3", author: "dale"}
    ];
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP);