const express = require("express");
const router = express.Router();
const Places = require ("../model/Places");



router.post("/", (req, res) => {
const name = req.body.name;
const location = req.body.location;
const geoloc = req.body.geoloc
const img =req.body.img
const comment = "";


Places.create({
  name,
  location,
  geoloc,
  comment,
  img
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



 module.exports = router;