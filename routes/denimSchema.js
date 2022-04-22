var express = require('express');
const denim_controlers= require('../controllers/denimSchemas');
var router = express.Router();

/* GET home page. */
/* GET costumes */ 
router.get('/', denim_controlers.denim_view_all_Page); 
/*
router.get('/', function(req, res, next) {
  res.render('costumeSchema', { title: 'Costume Schema' });
});
*/

/* GET detail Denim page */ 
router.get('/detail', denim_controlers.denim_view_one_Page);

/* GET create Denim page */ 
router.get('/create', denim_controlers.denim_create_Page);


/* GET create update page */ 
router.get('/update', denim_controlers.denim_update_Page); 

/*GET delete costume page */ 
router.get('/delete', denim_controlers.denim_delete_Page);
module.exports = router;


