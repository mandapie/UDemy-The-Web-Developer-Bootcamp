var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogApp", { useNewUrlParser: true });

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);
// User has to be below Post to register "posts" exists
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

User.create({
    email: "adam@email.com",
    name: "Adam",
    posts: [
        {titie: "Greetings", content: "I'm Adam"},
        {titie: "Welcome", content: "Welcome to blah"},
        {titie: "Hello", content: "World"}
        ]
}, function(err, user) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
});

var craig = new User({
    email: "Craig@email.edu",
    name: "Craig"
});
craig.posts.push({
    title: "LOL",
    content: "It means laugh out loud"
});
craig.save(function(err, user) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
});

User.findOne({name: "Adam"}, function(err, user) {
    if (err) {
        console.log(err);
    }
    else {
        user.posts.push({
            title: "PS",
            content: "IDK"
        });
        user.save(function(err, usr) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(usr);
            }
        });
    }
});