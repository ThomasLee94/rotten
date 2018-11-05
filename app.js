// Name: Thomas J Lee
// Project: Rotten Potatoes

// Require npm modules
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
// var debugger = require("locus");
// ! Above packages installed.

var app = express()
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method"))

var reviews = require("./controllers/reviews")(app)

app.listen(3000, () => {
    console.log("App listening to port 3000!");
})

module.exports = app;


