const express = require("express");
const router = express.Router();
const Places = require("../models/Places");
const uploader = require("../configs/cloudinary");
const axios = require("axios");

router.post("/places", (req, res) => {
  const getUrl = (longitude, latitude) => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=place&access_token=pk.eyJ1IjoiZm9uc29nbXMiLCJhIjoiY2swbWRsZWo3MTV6bTNkcW9vc29ybDZyMSJ9.EiT_I5moTDeyh3CM_Uc5CQ`;
  };

  const { name, latitude, longitude, comment, file } = req.body;
  axios
    .get(getUrl(longitude, latitude))
    .then((response) => {
      console.log(response.data);
      const city = response.data.features[0].text;
      const country =
        response.data.features[0].context[
          response.data.features[0].context.length - 1
        ].text;
      console.log(city);
      console.log(req.file, "FILE");
      const imgPath = req.body.file.secure_url;
      //const imgName = req.file.originalname;

      Places.create({
        name,
        city,
        country,
        latitude,
        longitude,
        comment,
        imgPath,
      })
        .then((places) => res.status(201).json(places))
        .catch((error) => {
          res.json(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(req.body);
});

router.get("/places", (req, res) => {
  console.log("this is working");
  Places.find()

    .then((places) => {
      res.status(200).json(places);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/place-info/:id", (req, res) => {
  Places.findById(req.params.id)
    .then((places) => {
      if (!places) {
        res.status(404).json(places);
      }
      res.json(places);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.put("/placeinfo/:id", (req, res) => {
  const {
    name,
    city,
    country,
    latitude,
    longitude,
    comment,
    imgPath,
    imgName,
  } = req.body;

  Places.findByIdAndUpdate(
    req.params.id,
    { name, city, country, latitude, longitude, comment, imgPath, imgName },
    { new: true }
  )
    .then((places) => {
      res.status(200).json(places);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded"));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});

module.exports = router;
