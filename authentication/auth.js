const chalk = require('chalk');
const config = require('config');
const Acuity = require('acuityscheduling');

var acuity = Acuity.basic({
    userId: process.env.userId,
    apiKey: process.env.apiKey
});

exports.authUser = (req, res, next) => {
  try {
    acuity.request('appointments', function (err, resp, appointments) {
        if(err)  { 
            res.send({
                status: 400,
                error: err
            });
        } else {
            if(appointments.length > 0) {
                console.log(chalk.green('Success, Authorized User !!!'))
                next();
            } else {
                console.log(chalk.red('Error, Unauthorized User !!!'))
                res.status(401).send({
                    message: appointments
                });
            }
        }
    });
  } catch(errorMessage) {
    res.send({
        status: 400,
        error: errorMessage
    });
  }
}
