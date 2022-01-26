const chalk = require('chalk');

// Validate API
exports.validateLoginUserAPI = (req, res, next) => {
    // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    var error = '';
    if(req.body.email === undefined || req.body.email === '') {
        console.log(chalk.red('email is missing'));
        error += "email, "
    } if(req.body.password === undefined || req.body.password === '') {
      console.log(chalk.red('password is missing'));
      error += "password, "
    } 
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        });
    } else {
      next();
    }
};


exports.validateRegisterUserAPI = (req, res, next) => {
    // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    var error = '';
    if(req.body.user === undefined || req.body.user === '') {
        console.log(chalk.red('user is missing'));
        error += "user, "
    } if(req.body.email === undefined || req.body.email === '') {
      console.log(chalk.red('email is missing'));
      error += "email, "
    } if(req.body.password === undefined || req.body.password === '') {
      console.log(chalk.red('password is missing'));
      error += "password, "
    } 
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        });
    } else {
      next();
    }
};

exports.validateChangePasswordAPI = (req, res, next) => {
    // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    var error = '';
    if(req.body.email === undefined || req.body.email === '') {
        console.log(chalk.red('email is missing'));
        error += "email, "
    } if(req.body.password === undefined || req.body.password === '') {
      console.log(chalk.red('password is missing'));
      error += "password, "
    } if(req.body.newpassword === undefined || req.body.newpassword === '') {
      console.log(chalk.red('newpassword is missing'));
      error += "newpassword, "
    } 
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        });
    } else {
      next();
    }
};

exports.validateVerifyTokenAPI = (req, res, next) => {
    // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    var error = '';
    if(req.body.token === undefined || req.body.token === '') {
        console.log(chalk.red('token is missing'));
        error += "token, "
    } 
    
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        });
    } else {
      next();
    }
};

exports.validateRenewTokenAPI = (req, res, next) => {
    // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    var error = '';
    if(req.body.email === undefined || req.body.email === '') {
        console.log(chalk.red('email is missing'));
        error += "email, "
    } if(req.body.token === undefined || req.body.token === '') {
      console.log(chalk.red('token is missing'));
      error += "token, "
    } 
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        });
    } else {
      next();
    }
};

exports.validateVerifyCodeAPI = (req, res, next) => {
    // console.log();
    // console.log(chalk.bgYellowBright("---------------- Validated API Data ----------------"));
    var error = '';
    if(req.body.user === undefined || req.body.user === '') {
        console.log(chalk.red('user is missing'));
        error += "user, "
    } if(req.body.code === undefined || req.body.code === '') {
      console.log(chalk.red('code is missing'));
      error += "code, "
    } 
    if(error!=='') {
        res.status(400).send({
          status: 400,
          message: error + ' is required !!!'
        });
    } else {
      next();
    }
};