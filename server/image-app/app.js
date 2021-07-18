var express = require('express');
//var cloudiRouter = require('./DeleteLater-imageRoutes');
const cloudiRouter = require('../routes/member');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/cloudinaryUpload',
// {
//     useNewUrlParser: true
// });
// mongoose.connection;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.headers('Access Controll-Allow-Mthods', 'POST, PUT, GET, DELETE');
    return res.status(200).json({});
  }

  next();
});

// // THIS PART HANDLES THE ROUTING/URL
app.use('/uploads', cloudiRouter);

// THE WE HANDLE THE FINAL ERRORS

//HANDLE ERROR
app.use((req, res, next) => {
  const error = new Error('NOT FOUND');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
