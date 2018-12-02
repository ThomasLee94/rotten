const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema ({
    title: String,
    description: String,
    movieTitle: String,
    rating: Number
})

module.exports = mongoose.model("Review", ReviewSchema)

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const PostSchema = new Schema({
//   title: { type: String, required: true },
//   url: { type: String, required: true },
//   summary: { type: String, required: true }
// });

// module.exports = mongoose.model("Post", PostSchema);