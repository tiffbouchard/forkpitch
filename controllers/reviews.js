const Review = require("../models/review");
const pitchfork = require("pitchfork");

module.exports = {
  search,
};

// show function , shows most recent reviews
// don't need this function, only to make UI betterso the homepage is not blank
// function showRecent(req, res, next) {
//   const s = new pitchfork.Page(1);
//   s.on("ready", function (results) {
//     console.log("results", results);
//   });
// }

// search function
function search(req, res, next) {
  const search = new pitchfork.Search("grimes");
  search.on("ready", function (results) {
    results.forEach(function (review) {
      console.log("Review", review.attributes);
    });
  });
}

//returns reviews based on what is in the Search function, change what is in the search function to reflect what is in the search bar input value
console.log(search());
