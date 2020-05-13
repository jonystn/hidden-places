const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const placesSchema = new Schema ({
name: String,
location: {
  country: String,
  city: String,
  address: String
},

geoloc: {
  latitude: Number,
  longitude: Number
},
comment: String,
img: String,

})

const Places = mongoose.model('Places', placesSchema);

module.exports = Places;


