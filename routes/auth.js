const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;








router.post("/signup", (req, res) => {
  const { username, password, email } = req.body;

  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ message: "Your password must be 6 char. min." });
  }
  if (!username) {
    return res.status(400).json({ message: "Your username cannot be empty" });
  }

  User.findOne({ username: username })
    .then((found) => {
      if (found) {
        return res
          .status(400)
          .json({ message: "This username is already taken" });
      }

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({
        username: username,
        password: hash,
        email: email,
      }).then((dbUser) => {
        req.login(dbUser, (err) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error while attempting to login" });
          }
          res.json(dbUser);
        });
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    req.login(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login" });
      }
      return res.json(user);
    });
  })(req, res);
});

router.delete("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Successful logout" });
});

// returns the logged in user
router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/explorer",
    failureRedirect: "/login",
  })
);




//Facebook Passport

module.exports = router;
