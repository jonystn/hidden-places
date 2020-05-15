const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const placesSchema = new Schema ({
name: String,
// country: String,
// city: String,
// address: String,
latitude: Number,
longitude: Number,

comment: String,
imgName: String,
imgPath: String

})

const Places = mongoose.model('Places', placesSchema);

module.exports = Places;


