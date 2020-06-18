const pitchfork = require("pitchfork");
const PitchforkReview = require("../models/pitchforkreview");
const UserReview = require("../models/review");

module.exports = {
  index,
  show,
};

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

function show(req, res) {
  PitchforkReview.findById(req.params.id, function (err, pitchforkReview) {
    UserReview.find({ pitchforkReview: pitchforkReview._id }, function (
      err,
      userReviews
    ) {
      res.render("reviews/show", {
        user: req.user,
        review: pitchforkReview,
        userReviews,
      });
    });
  });
}
