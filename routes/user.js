const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.put("/favorites/:placeId", async (req, res) => {
  const userId = req.user.id;
  // User.findById(userId).then((user) => {
  //   const isFavorite = user.favorites.find((favorite) => {
  //     return favorite === req.params.placeId;
  //   });
  let user = await User.findById(userId);
  let isFavorite = user.favorites.find((favorite) => {
    return favorite == req.params.placeId;
  });
  // console.log(isFavorite, "FAV");
  // console.log(user, "USER");
  // console.log(req.params.placeId);
  if (isFavorite) {
    User.findByIdAndUpdate(
      userId,
      {
        $pull: { favorites: req.params.placeId },
      },
      {
        new: true,
      }
    )
      .populate("favorites")
      .then((userUpdated) => res.json(userUpdated))
      .catch((err) => res.status(400).json(err));
  } else {
    User.findByIdAndUpdate(
      userId,
      {
        $push: { favorites: req.params.placeId },
      },
      {
        new: true,
      }
    )
      .populate("favorites")
      .then((userUpdated) => res.json(userUpdated))
      .catch((err) => res.status(400).json(err));
  }
  //});
});

router.get("/favorites/:id", (req, res) => {
  User.findById(req.params.id)
    .populate("favorites")
    .then((user) => {
      if (!user) {
        res.status(404).json(user);
      }
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .populate("favorites")
    .then((user) => {
      console.log(user);
      if (!user) {
        res.status(404).json(user);
      }
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
