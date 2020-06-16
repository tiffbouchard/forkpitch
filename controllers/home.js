const User = require("../models/user");
const pitchfork = require("pitchfork");

module.exports = {
  index,
};

// renders home page and passes variables to views
function index(req, res, next) {
  const searchTerm = req.query.searchTerm;
  const pitchforkSearch = new pitchfork.Search(searchTerm);
  pitchforkSearch.on("ready", function (results) {
    // return results;
    // results.forEach(function (review) {
    //   console.log("Review", review.truncated());
    // });
    res.render("reviews/index", {
      reviews: results.length > 0 ? results.truncated() : [],
      user: req.user,
      searchTerm,
    });
  });
}
