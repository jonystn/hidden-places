const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt"); // !!!
const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(
  new LocalStrategy(
    // { usernameField: "email", passwordField: "passwd", session: false },
    (username, password, next) => {
      User.findOne({ username }, (err, foundUser) => {
        console.log(username);
        if (err) {
          next(err);
          return;
        }

        if (!foundUser) {
          next(null, false, { message: "Incorrect username." });
          return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
          next(null, false, { message: "Incorrect password." });
          return;
        }

        next(null, foundUser);
      });
    }
  )
);

// Google Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // to see the structure of the data in received response:
      console.log("Google account details:", profile);

      User.findOne({ googleID: profile.id })
        .then((user) => {
          if (user) {
            done(null, user);
            return;
          }

          User.create({ googleID: profile.id })
            .then((newUser) => {
              done(null, newUser);
            })
            .catch((err) => done(err)); // closes User.create()
        })
        .catch((err) => done(err)); // closes User.findOne()
    }
  )
);
