const mongoose = require ('mongoose');
const {Schema, model} = mongoose;

const placesSchema = new Schema ({
name: String,
location: [{
  conutry: String,
  city: String,
  address: String
}],

geoloc: [{
  latitude: Number,
  longitude: Number
}],
comment: String,
img: String,

})

const Places = model('Places', placesSchema);

module.export = Places;


