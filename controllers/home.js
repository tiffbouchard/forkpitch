const User = require("../models/user");

module.exports = {
  index,
};

// renders home page and passes variables to views
function index(req, res, next) {
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  User.find(modelQuery).exec(function (err, users) {
    if (err) return next(err);
    res.render("reviews/index", {
      users,
      user: req.user,
      name: req.query.name,
    });
  });
}
