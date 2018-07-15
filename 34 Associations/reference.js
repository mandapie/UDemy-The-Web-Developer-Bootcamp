var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogApp", { useNewUrlParser: true });

var Post = require("./models/post"); //don't need .js
var User = require("./models/user");

// User.create({
//     email: "bob@email.com",
//     name: "Bob"
// });

Post.create({
    title: "test 2",
    content: "hello"
}, function(err, post) {
    if (err) {
        console.log(err);
    }
    else {
        User.findOne({email: "bob@email.com"}, function(err,user){
            if (err) {
                console.log(err);
            }
            else {
                user.posts.push(post);
                user.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(data);
                    }
                });
            }
        });
    }
});

User.findOne({email: "bob@email.com"}).populate("posts").exec(function(err, user){
    if (err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
});