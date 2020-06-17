// const Review = require("../models/review");
// const pitchfork = require("pitchfork");

// module.exports = {
//   search,
// };

// show function , shows most recent reviews
// don't need this function, only to make UI betterso the homepage is not blank
// function showRecent(req, res, next) {
//   const s = new pitchfork.Page(1);
//   s.on("ready", function (results) {
//     console.log("results", results);
//   });
// // }

// function search(req, res, next) {
//   console.log(req.query);
// res.render("reviews/index", params);
// const search = new pitchfork.Search("gorillaz");
// search.on("ready", function (results) {
//   results.forEach(function (review) {
//     console.log("Review", review.truncated());
//   });
// });

//truncate before views, then

// function search(req, res, next) {
//   const search = new pitchfork.Search("lana del rey");
//   search.on("ready", function (results) {
//     results.forEach(function (r) {
//       console.log(r.truncated());
//     });
//   });
// }

// console.log(search());

//save input value to variable
//put the input value into the Search function
//search through pitchfork db
//return the results
//post them to the reviews/index views
