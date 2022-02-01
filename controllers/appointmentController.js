exports.getEachAppointment = (req, res, next) => {
    try {
        //axios https://acuityscheduling.com/api/v1/appointments/id
       res.send({
           data: {
            "id": 54321,
            "firstName": "Bob",
            "lastName": "McTest",
            "phone": "",
            "email": "bob.mctest@example.com",
            "date": "June 17, 2013",
            "time": "10:15am",
            "endTime": "11:15am"
           },
           message: "Dummy Appointment !!"
       })
    } catch(err) {
        res.status(400).send({
            error: err
        })
    }
}