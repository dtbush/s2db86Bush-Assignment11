var Denim = require('../models/denimSchema'); 
 
// List of all Denims 
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
/* 
// for a specific Denim. 
exports.denim_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Denim detail: ' + req.params.id); 
}; 
 */
//for a specific Denim. 
exports.denim_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Denim.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Denim create on POST. 
exports.denim_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Denim(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.length = req.body.length; 
    document.width = req.body.width; 
    document.stretchy = req.body.stretchy; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 
 
// Handle denim delete form on DELETE. 
exports.denim_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: denim delete DELETE ' + req.params.id); 
}; 
 
// Handle Denim update form on PUT. 
/*
exports.denim_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Denim update PUT' + req.params.id); 
}; 
*/
// Handle Costume update form on PUT. 
exports.denim_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Denim.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.length) toUpdate.length = req.body.length; 
        if(req.body.width) toUpdate.width = req.body.width; 
        if(req.body.stretchy) toUpdate.stretchy = req.body.stretchy; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};

// VIEWS 
// Handle a show all view 
exports.denim_view_all_Page = async function(req, res) { 
    try{ 
        theDenims = await Denim.find(); 
        res.render('denim', { title: 'Denim Search Results', results: theDenims }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 