var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: String,
    location: String,
    long: Number,
    lat: Number,
    author: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment" // case sensitive. must be the same as the model
        }
    ]
});
module.exports = mongoose.model("campground", campgroundSchema);