const pitchfork = require("pitchfork");
const PitchforkReview = require("../models/pitchforkreview");

module.exports = {
  searchIndex,
};

function searchIndex(req, res, next) {
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
        res.render("reviews/search", {
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
