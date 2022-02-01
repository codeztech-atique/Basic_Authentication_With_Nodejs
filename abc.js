const Acuity = require('acuityscheduling');
const fs = require('fs');

var acuity = Acuity.basic({
  userId: '24448045',
  apiKey: '1237b058135bf820f43062468fbd2a61e'
});

acuity.request('appointments', function (err, res, appointments) {
  if (err) return console.error(err);
  if(appointments.length > 0) {
    fs.writeFile('test.json', JSON.stringify(appointments), (error, res) => {
      if(!error) {
        console.log('File written successfully !!!');
      }
    })
  } else {
    console.log(appointments)
  }
});