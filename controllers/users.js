const passport = require("passport");

module.exports = {
  logout,
};

// log out
function logout(req, res, next) {
  req.logout();
  res.redirect("/");
}
