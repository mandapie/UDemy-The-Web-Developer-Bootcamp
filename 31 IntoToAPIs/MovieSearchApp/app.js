var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("search");
});

app.get("/results", function (req, res) {
    var title = req.query.search;
    var uri = "http://www.omdbapi.com/?apikey=thewdb&s=" + title;
    request(uri, function (err, response, body) {
        if(!err && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP);