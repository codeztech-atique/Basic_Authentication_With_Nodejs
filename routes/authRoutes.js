const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Authentication
// const authentication = require('../authentication/auth');

// Middleware
const middleware = require('../middleware/validation');

// Controller
const authController = require('../controllers/authCtrl');

// Sample API testing
app.get('/', (req, res) => {
  res.send({
     status:200,
     message:'App is working fine!'
  });
});

app.post('/register', [middleware.validateRegisterUserAPI], (req, res) => {
   authController.register(req, res);
});

app.post('/verifycode', [middleware.validateVerifyCodeAPI], (req, res) => {
   authController.verifyCode(req, res);
});

app.post('/login', [middleware.validateLoginUserAPI], (req, res) => {
   authController.login(req, res);
});

app.post('/changepassword', [middleware.validateChangePasswordAPI], (req, res) => {
   authController.changePassword(req, res);
});

app.post('/verifytoken', [middleware.validateVerifyTokenAPI], (req, res) => {
   authController.verifyToken(req, res);
});

app.post('/renewtoken', [middleware.validateRenewTokenAPI], (req, res) => {
   authController.renewToken(req, res);
});

app.post('/forgotpassword', (req, res) => {
   authController.forgetPassword(req, res);
});

app.post('/confirmpassword', (req, res) => {
   authController.confirmPassword(req, res);
});

module.exports = app;