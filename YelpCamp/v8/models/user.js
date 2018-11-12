var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: String,
    firstName: String,
    lastName: String,
    email: {type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0g9PSXKJdfoDVJ0kEx-M2D5jjSwS4_PFUvbQyJ85wA7VCnRjaw"}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);