const chalk = require('chalk');

// Validate API
exports.validaterAPI = (req, res, next) => {
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

