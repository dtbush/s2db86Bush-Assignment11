var Denim = require('../models/denimSchema'); 
 
// List of all Denims 
// List of all Costumes 
exports.denim_list = async function(req, res) { 
    try{ 
        theDenims = await Denim.find(); 
        res.send(theDenims); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Denim. 
exports.denim_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Denim detail: ' + req.params.id); 
}; 
 
// Handle Denim create on POST. 
exports.denim_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Denim create POST'); 
}; 
 
// Handle denim delete form on DELETE. 
exports.denim_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: denim delete DELETE ' + req.params.id); 
}; 
 
// Handle Denim update form on PUT. 
exports.denim_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Denim update PUT' + req.params.id); 
}; 