var express = require('express');
const denim_controlers= require('../controllers/denimSchemas');
const detail_controlers= require('../controllers/details');
const create_controlers=  require('../controllers/creates');
var router = express.Router();

/* GET home page. */
/* GET costumes */ 
router.get('/', denim_controlers.denim_view_all_Page ); 
/*
router.get('/', function(req, res, next) {
  res.render('costumeSchema', { title: 'Costume Schema' });
});
*/

/* GET detail Denim page */ 
router.get('/detail', detail_controlers.denim_view_one_Page);

/* GET create Denim page */ 
router.get('/create', create_controlers.denim_create_Page);
module.exports = router;
