const pitchfork = require("pitchfork");
const PitchforkReview = require("../models/pitchforkreview");

module.exports = {
  index,
  show,
};

// // renders home page and passes variables to views
// function index(req, res, next) {
//   const searchTerm = req.query.searchTerm;
//   const pitchforkSearch = new pitchfork.Search(searchTerm);
//   pitchforkSearch.on("ready", function (results) {
//     res.render("reviews/index", {
//       results,
//       user: req.user,
//       searchTerm,
//     });
//   });
// }

function index(req, res, next) {
  const searchTerm = req.query.searchTerm;
  const pitchforkSearch = new pitchfork.Search(searchTerm);
  pitchforkSearch.on("ready", function (results) {
    try {
      const reviews = results.map((review) => review.truncated());
      const promises = reviews.map((review) =>
        PitchforkReview.findOneAndUpdate(
          { url: review.url },
          { $set: review },
          { upsert: true, new: true }
        )
      );
      Promise.all(promises).then((reviewDocs) => {
        res.render("reviews/index", {
          reviews: reviewDocs,
          user: req.user,
          searchTerm,
        });
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
}

// controller to show the clicked albums details - render view ('reviews/show')
// when a album is clicked, save it to the Review model
// then find by id in Review model
//

//the req params is the review title
//find the review by the review title

// function show(req, res, next) {
//   const searchTerm = req.query.name;
//   const pitchforkSearch = new pitchfork.Search(searchTerm);
//   pitchforkSearch.on("ready", function (results) {
//     console.log(results);
//     res.render("reviews/show", {
//       results,
//       user: req.user,
//       searchTerm,
//     });
//   });
// }

// function show(req, res, next) {
//   const review = new pitchfork.Review({
//     url: req.query.url,
//     name: req.query.name,
//   });
//   review.promise.then(function (revObj) {
//     console.log(revObj);
//     res.render("reviews/show", {
//       rev: revObj,
//       user: req.user,
//     });
//   });
// }

function show(req, res, next) {
  PitchforkReview.findById(req.params.id, function (review) {
    res.render("reviews/show", {
      user: req.user,
      review,
    });
  });
}
