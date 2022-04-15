var express = require('express');
const denim_controlers= require('../controllers/denimSchemas'); 
var router = express.Router();

/* GET home page. */
/* GET costumes */ 
router.get('/', denim_controlers.denim_view_all_Page ); 
/*
router.get('/', function(req, res, next) {
  res.render('costumeSchema', { title: 'Costume Schema' });
});
*/
module.exports = router;
