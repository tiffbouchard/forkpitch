const express = require("express");
const router = express.Router();
const passport = require("passport");

// controllers
const homeCtrl = require("./controllers/home");
const usersCtrl = require("./controllers/users");
const reviewsCtrl = require("./controllers/reviews");

const isLoggedIn = require("./middleware/isLoggedIn");

// home route
router.get("/", homeCtrl.index);

// user authentication
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);
router.get("/logout", usersCtrl.logout);

// api routes

module.exports = router;
