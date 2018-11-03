// Name: Thomas J Lee
// Project: Rotten Potatoes

// Require npm modules
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/rotten-potatoes');
// var debugger = require("locus");
// ! Above packages installed.

var app = express()

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

// Mock model
const Review = mongoose.model("Review", {
    title: String,
    movieTitle: String
})

// Index route
app.get("/", (req, res) => {
    Review.find()
        .then(reviews => {
            res.render("reviews-index", {reviews: reviews})
        })
        .catch(err => {
            console.log(err)
        })
    
})

// app.get(".", async (req, res) => {
//     let reviews = await Review.find()
// })

app.listen(3000, () => {
    console.log("App listening to port 3000!");
})