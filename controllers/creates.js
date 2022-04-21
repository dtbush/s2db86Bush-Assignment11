// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.denim_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('denimcreate', { title: 'Denim Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 