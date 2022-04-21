var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Part3:1
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose'); 
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}); 
//end of 3:1
var denimSchema = require("./models/denimSchema");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var denimSchemaRouter = require('./routes/denimSchema');
var addmodsRouter = require('./routes/addmods');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/denimSchema', denimSchemaRouter);
app.use('/addmods', addmodsRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await denimSchema.deleteMany(); 
 
  let instance1 = new denimSchema({length: 32, width: 32, stretchy: false}); 
  let instance2 = new denimSchema({length: 34, width: 36, stretchy: true}); 
  let instance3 = new denimSchema({length: 32, width: 30, stretchy: true}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  instance2.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("Second object saved") 
}); 
  instance3.save( function(err,doc) { 
  if(err) return console.error(err); 
  console.log("Third object saved") 
}); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 

module.exports = app;
