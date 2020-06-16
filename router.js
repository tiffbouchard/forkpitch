const express = require("express");
const router = express.Router();

// controllers
const homeCtrl = require("./controllers/home");
const userCtrl = require("./controllers/users");

const isLoggedIn = require("./middleware/isLoggedIn");

// home route
router.get("/", homeCtrl.index);

// user authentication
router.get("/auth/google", userCtrl.login);
router.get("/oauth2callback", userCtrl.loginCallback);
router.get("/logout", userCtrl.logout);

// api routes

module.exports = router;
