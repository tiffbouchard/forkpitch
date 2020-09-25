const UserReview = require("../models/review");
const PitchforkReview = require("../models/pitchforkreview");

module.exports = {
  create,
  delete: deleteOne,
  getCurrentUserReviews,
  getUserSavedReviews,
};

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

function getCurrentUserReviews(req, res) {
  const id = req.user.id;
  UserReview.find({ user: id })
    .populate("pitchforkReview")
    .sort({ createdAt: "desc" })
    .exec(function (err, currentUserReviews) {
      res.render("reviews/myreviews", {
        user: req.user,
        currentUserReviews: currentUserReviews,
      });
    });
}

function getUserSavedReviews(req, res) {
  res.render("saved-reviews/index", {
    user: req.user,
  });
}
