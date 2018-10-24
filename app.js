// Name: Thomas J Lee
// Project: Rotten Potatoes

// Require npm modules
var express = require("express");
var handlebars = require("expres-handlebars")
// ! Above packages installed.

var app = express()

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", handlebars)

// Index route
app.get("/", (req, res) => {
    res.render("home", {msg: "handlebars is cool"})
})


app.listen(3000. () => {
    console.log("App listening to port 3000!");
})