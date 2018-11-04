// Name: Thomas J Lee
// Project: Rotten Potatoes

// Require npm modules
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser")
var mongoose = require("mongoose");
// var debugger = require("locus");
// ! Above packages installed.

mongoose.connect('mongodb://localhost/rotten-potatoes');
var app = express()
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log("App listening to port 3000!");
})

// Mock model
const Review = mongoose.model("Review", {
    title: String,
    description: String,
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

// Show new review
app.get("/reviews/new", (req, res) => {
    res.render("reviews-new", {});
})
// app.get(".", async (req, res) => {
//     let reviews = await Review.find()
// })

// Create new review
app.post("/reviews", (req, res) => {
    Review.create(req.body)
        .then((review) => {
            console.log(review);
            res.redirect(`/reviews/${review._id}`)
        }).catch((err) => {
            console.log(err.message);
        })
})


app.get("/reviews/:id", (req, res) => {
    Review.findById(req.params.id)
        .then((review) => {
            res.render("reviews-show", {review: review})
        }).catch((err) => {
            console.log(err.message)
        })
})
