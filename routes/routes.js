const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Middleware

// Authentication
// const authentication = require('../authentication/auth');


// Test API
app.post('/test', (req, res) => {
   res.send({
      status: 200,
      message: "Success !!!"
   })
});


module.exports = app;
