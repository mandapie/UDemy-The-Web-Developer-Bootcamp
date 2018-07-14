var mongoose = require("mongoose");

// connect to a database
mongoose.connect("mongodb://localhost:27017/catApp", { useNewUrlParser: true });

// define cat model
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// object for collection
var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });
// george.save(function(err, cat) {
//     if (err) {
//         console.log("something went wrong");
//     }
//     else {
//         console.log("saved:", cat);
//     }
// });

Cat.create({
    name: "Snowball",
    age: 3,
    temperament: "Chill"
}, function(err, cat) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(cats);
    }
});