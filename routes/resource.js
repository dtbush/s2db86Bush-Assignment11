var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var denim_controller = require('../controllers/denimSchemas'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// DENIM ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/denims', denim_controller.denim_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/denims/:id', denim_controller.denim_delete); 
 
// PUT request to update Costume. 
router.put('/denims/:id', denim_controller.denim_update_put); 
 
// GET request for one Costume. 
router.get('/denims/:id', denim_controller.denim_detail); 
 
// GET request for list of all Costume items. 
router.get('/denims', denim_controller.denim_list); 
 
module.exports = router; 