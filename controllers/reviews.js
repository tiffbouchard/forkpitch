const UserReview = require("../models/review");
const PitchforkReview = require("../models/pitchforkreview");

module.exports = {
  create,
};

function create(req, res) {
  // when comment is created the pitchforkReview is set to the current album reviews id
  req.body.pitchforkReview = req.params.id;
  // when comment is created the user is set to the user that made the POST request
  req.body.user = req.user;
  UserReview.create(req.body, function (err, userReview) {
    res.redirect("/show/" + req.params.id);
  });
}
