const Review = require("../models/review");

module.exports = function(app) {
    // Index route
    app.get('/', (req, res) => {
      Review.find()
        .then(reviews => {
          res.render('reviews-index', {reviews: reviews});
        })
        .catch(err => {
          console.log(err);
        });
    });

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

    // Show single review
    app.get("/reviews/:id", (req, res) => {
        Review.findById(req.params.id)
            .then((review) => {
                res.render("reviews-show", {review: review})
            }).catch((err) => {
                console.log(err.message)
            })
    })

    // Edit single review
    app.get("/reviews/:id/edit", (req, res) => {
        Review.findById(req.params.id, (err, review) => {
            res.render("reviews-edit", {review: review})
        })
        .catch(err => {
            console.log(err.message)
        })
    })

    // Delete single review
    app.delete("/reviews/:id", (req, res) => {
        console.log("Delete review")
        Review.findByIdAndDelete(req.params.id)
            .then((review) => {
                res.redirect("/")
            })
            .catch((err) => {
                console.log(err.message)
            })
    })

  
  }