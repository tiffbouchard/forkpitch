const express = require("express");
const router = express.Router();
const passport = require("passport");

// controllers
const homeCtrl = require("./controllers/home");
const usersCtrl = require("./controllers/users");
const reviewsCtrl = require("./controllers/reviews");
const searchCtrl = require("./controllers/search");

const isLoggedIn = require("./middleware/isLoggedIn");

// home route
router.get("/", homeCtrl.index);
router.get("/show/:id", homeCtrl.show);

// search route
router.get("/search", searchCtrl.searchIndex);

// user review route
router.delete("/show/:reviewId/:commentId/delete", reviewsCtrl.delete);
router.post("/show/:id", reviewsCtrl.create);
router.get("/myreviews", reviewsCtrl.getCurrentUserReviews);
router.get("/saved", reviewsCtrl.getUserSavedReviews);

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
