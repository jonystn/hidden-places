const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const Places = require("../models/Places");
const uploader = require("../configs/cloudinary");

router.post("/places", uploader.single("photo"), (req, res) => {
  // "photo" is a name attribute from the upload input file tag
  const { name, latitude, longitude, comment } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  console.log(req.body);

  Places.create({
    name,
=======
const Places = require ("../models/Places");
const uploader = require("../configs/cloudinary");
const  axios = require("axios");

router.post("/places", uploader.single("photo"), (req, res) => {
  // "photo" is a name attribute from the upload input file tag
  const getUrl=(longitude,latitude)=>{
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=place&access_token=pk.eyJ1IjoiZm9uc29nbXMiLCJhIjoiY2swbWRsZWo3MTV6bTNkcW9vc29ybDZyMSJ9.EiT_I5moTDeyh3CM_Uc5CQ`
  }
  
  const {name, latitude, longitude,  comment}= req.body;
  axios.get(getUrl(longitude,latitude)).then(response=>{
    
    console.log("this is a response!!!!!!!!!!!!!!!!!!!",response)
    const city=response.data.features[0].text
    const country=response.data.features[0].context[response.data.features[0].context.length-1].text;
    console.log(city);
    console.log(country);
  const imgPath =req.file.url;
  const imgName =req.file.originalname


  Places.create({
    name,
    city,
    country,
>>>>>>> master
    latitude,
    longitude,
    comment,
    imgPath,
<<<<<<< HEAD
    imgName,
  })
    .then((places) => res.status(201).json(places))
    .catch((error) => {
      res.json(error);
    });
});

router.get("/places", (req, res) => {
  Places.find()
    .then((places) => {
      res.status(200).json(places);
    })
    .catch((error) => {
      res.json(error);
    });
=======
    imgName
  })
  .then (places =>
    res.status(201).json(places)
    )
  .catch(error=>{
    res.json(error)
  })



    
  }).catch(err=>{
    console.log("THIS IS AN ERROR!!!!!!",err)
  })
  
console.log (req.body)



 });



router.get("/places", (req, res)=>{
  console.log("this is working")
  Places.find()
  
  .then(places =>{
  res.status(200).json(places )
  })
  .catch(error =>{
    res.json(error);
  })
>>>>>>> master
});

router.get("/placeinfo/:id", (req, res) => {
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

module.exports = router;
