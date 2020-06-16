const passport = require("passport");

module.exports = {
  login,
  loginCallback,
  logout,
};

// send user to log in
function login(req, res, next) {
  passport.authenticate("google", { scope: ["profile", "email"] });
}

// where to send user when logged in successfully/failed
function loginCallback(req, res, next) {
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  });
}

// log out
function logout(req, res, next) {
  req.logout();
  res.redirect("/");
}
