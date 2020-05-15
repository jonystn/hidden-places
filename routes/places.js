const express = require("express");
const router = express.Router();
const Places = require ("../models/Places");
const uploader = require("../configs/cloudinary")


router.post("/places", uploader.single("photo"), (req, res) => {
  // "photo" is a name attribute from the upload input file tag
  const {name, latitude, longitude, comment}= req.body;
  const imgPath =req.file.url;
  const imgName =req.file.originalname

console.log (req.body)



Places.create({
  name,
  latitude,
  longitude,
  comment,
  imgPath,
  imgName
})
.then (places =>
  res.status(201).json(places)
  )
.catch(error=>{
  res.json(error)
})

 });



router.get("/", (req, res)=>{
  Places.find()
  .then(places =>{
  res.status(200).json(places )
  })
  .catch(error =>{
    res.json(error);
  })
});

router.get("/placeinfo/:id", (req, res)=>{
  Places.findById(req.params.id)
  .then(places =>{
    if (!places) {
      res.status(404).json(places)
    }
    res.json(places)
  })
  .catch(error=>{
      res.json(error)
  });
});







 module.exports = router;