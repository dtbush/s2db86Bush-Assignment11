/*const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: String, 
 cost: Number 
}) ;
 
module.exports = mongoose.model("costumeSchema", costumeSchema) 
*/
const mongoose = require("mongoose") 
const denimSchema = mongoose.Schema({ 
 length: {
     type: Number,
     max: [64, 'the factory can only size to length 64'],
     min: [1, 'length must be at least 1']
 },
 width: {
     type: Number,
     max: [64, 'the factory can only size to length 64'],
     min: [1, 'length must be at least 1']
 },
 stretchy: Boolean 
}) ;
 
module.exports = mongoose.model("denimSchema", denimSchema) 
/*
const mongoose = require("mongoose") 
const denimSchema = mongoose.Schema({ 
 length: Number, 
 width: Number, 
 stretchy: Boolean 
}) ;
*/


