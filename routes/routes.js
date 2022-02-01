const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Middleware

// Authentication of user
const authentication = require('../authentication/auth');


// Controller
const controllers = require('../controllers/appointmentController');

// Test API
app.post('/test', [authentication.authUser], (req, res) => {
   res.send({
      status: 200,
      message: "Success !!!"
   })
});

// Sample Test API
app.post('/test', [authentication.authUser], (req, res) => {
   res.send({
      status: 200,
      message: "Success !!!"
   })
});

app.post('/appointments/:id', [authentication.authUser], (req, res, next) => {
   controllers.getEachAppointment(req, res, next);
});


module.exports = app;
