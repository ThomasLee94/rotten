// Name: Thomas J Lee
// Project: Rotten Potatoes

// Require npm modules
var express = require("express");
var exphbs = require("express-handlebars");
// var debugger = require("locus");
// ! Above packages installed.

var app = express()

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

// Mock model
let reviews = [
    {title: "Great review", movieTitle: "Batman II"},
    {title: "Awesome film", movieTitle: "Titanic"}
]

// Index route
app.get("/", (req, res) => {
    res.render("reviews-index", {reviews: reviews})
})

// app.get(".", async (req, res) => {
//     let reviews = await Review.find()
// })

app.listen(3000, () => {
    console.log("App listening to port 3000!");
})