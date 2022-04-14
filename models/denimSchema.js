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
 length: Number, 
 width: Number, 
 stretchy: Boolean 
}) ;
 
module.exports = mongoose.model("denimSchema", denimSchema) 


