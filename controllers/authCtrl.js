//Load cognito wrapper.
const jwt = require('jsonwebtoken');
const cognito = require('../services/congnito.js');

exports.register = async function(req, res){
    const {body} = req;

    //Validate request format.
    //if (body.email&&body.user&&body.password){
  
      let {email,user,password} = body;
  
      try {
  
        //Send to cognito the signup request.
        let result = await cognito.signUp(user,email,password);
        
        //Make response.
        let response = {
          username : result.user.username,
          id: result.userSub,
          sucess: true
        }
  
        res.status(200).json({"result":response});
  
      } catch(err) {
        console.error(err)
        res.status(400).json({"error":err});
    }
}

exports.verifyCode = async function(req, res) {
  const {
    body
  } = req;

  //Validate request format.
  if (body.user&&body.code){
    const {
      user,
      code
    } = body;

    try{

      //Send to cognito the signup request.
      let result = await cognito.verifyCode(user,code);
      res.status(200).json({"result":result});

    } catch(error){
      console.log(error);
      res.status(400).json({"error":error});
    }

  } else {
    res.status(400).json({"error":"bad format"});
  }
}

exports.login = async function(req, res){
    const {body} = req;

    //Validate request format.
    if (body.email && body.password) {
  
      let { email, password } = body;
  
      try {
        //Send to cognito the signup request.
        let result = await cognito.logIn(email, password);
        res.status(200).json({"result": result});

      } 
      catch(err){
        res.status(400).json({"error":err});
      }
  
    } else {
      res.status(400).json({"error":"bad format"});
    }  
}

exports.changePassword = async function(req, res) {
  const {body} = req;

  //Validate request format.
  if (body.email&&body.password&&body.newpassword){
    let { email,password,newpassword } = body;
    try{
      //Send to cognito the renew token request.
      let result = await cognito.changePwd(email,password,newpassword);
      res.status(200).json({"result":result});

    } catch(err){
      console.log(err);
      res.status(400).json({"error":err});
    }

  } else {
    res.status(400).json({"error":"bad format"});
  }
}

exports.verifyToken = async function(req, res) {
  const { body } = req;
  //Validate request format.
  if (body.token) {
      let { token } = body;
      try {
        //Verify token.
        let result = await cognito.verify(token);
        res.status(200).json({"result":result});

      } catch(e) {
        console.log(e);
        res.status(500).json({"error":e});
      }
    } else {
      res.status(400).json({"error":"bad format"});
    }
}


exports.renewToken = async function(req, res){
  const {body} = req;
  //Validate request format.
  if (body.email && body.token){
    let {email,token} = body;

    try{

      //Send to cognito the renew token request.
      let result = await cognito.reNew(email, token);

      res.status(200).json({"result":result});

    } catch(err){
      console.log(err);
      res.status(400).json({"error":err});
    }

  } else {
    res.status(400).json({"error":"bad format"});
  }
}

exports.forgetPassword = async function(req, res) {
  const {body} = req;

  //Validate request format.
  if (body.email) {
    let { email } = body;
    try{
      //Send to cognito the renew token request.
      let result = await cognito.resetPassword(email);
      res.status(200).send({
        message: "Please check your email for activation code !!!"
      })

    } catch(err){
      console.log(err);
      res.status(400).json({"error":err});
    }

  } else {
    res.status(400).json({"error":"bad format"});
  }
}


exports.confirmPassword = async function(req, res) {
  const {body} = req;

  //Validate request format.
  if (body.email && body.verficationCode && body.password) {
    let { email, verficationCode, password } = body;
    try{
      //Send to cognito the renew token request.
      let result = await cognito.confirmPass(email, verficationCode, password);
      res.status(200).send({
        message: "Password change successfully !!!",
        result: result
      })

    } catch(err){
      console.log(err);
      res.status(400).json({"error":err});
    }

  } else {
    res.status(400).json({"error":"bad format"});
  }
}