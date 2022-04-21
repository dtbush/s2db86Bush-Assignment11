var Denim = require('../models/denimSchema'); 
// Handle a show one view with id specified by query 
exports.denim_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Denim.findById( req.query.id) 
        res.render('denimdetail',  
{ title: 'Denim Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 