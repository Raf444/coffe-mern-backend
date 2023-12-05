var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

require('dotenv').config()

const models = require('./models');
const services = require('./services')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const addRouter = require("./routes/added")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add',addRouter)

app.models = {
  color:models.colorModel,
  category:models.categoryModel,
  coffee:models.coffeeModel,
  vendor:models.vendorModel
}

app.services = {
  colors: new (services.color)(app.models),
  categories:new (services.category)(app.models),
  vendors: new (services.vendor)(app.models),
  coffees:new (services.coffee)(app.models)
}

mongoose.connect('mongodb+srv://rafayel04zakharyan:zakharyan04@cluster0.nzts04t.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>console.log("mongodb connected")).catch((err)=>console.log(err.message))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  res.send(err.message)
});

module.exports = app;
