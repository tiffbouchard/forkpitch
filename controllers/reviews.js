const UserReview = require("../models/review");
const PitchforkReview = require("../models/pitchforkreview");

module.exports = {
  index,
  create,
  delete: deleteOne,
};

function index(req, res) {
  res.render("followed-reviews/index", {
    user: req.user,
  });
}

function create(req, res) {
  req.body.pitchforkReview = req.params.id;
  req.body.user = req.user;
  UserReview.create(req.body, function (err, userReview) {
    res.redirect("/show/" + req.params.id);
  });
}

function deleteOne(req, res) {
  UserReview.remove({ _id: req.params.commentId }, function () {
    res.redirect("/show/" + req.params.reviewId);
  });
}
