
require('dotenv').config()
const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');

const UserPoolId = process.env.USER_POOL_ID
const ClientId = process.env.CLIENT_ID

const poolData = {
    UserPoolId,
    ClientId
}

AWS.config.update({
    region: process.env.POOL_REGION
})

async function registerUser(json) {
    const {
        telephoneNumber,
        confirmationCode,
        password
    } = json

    return new Promise((resolve, reject) => {
        let attributeList = []

        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
            Name:"phone_number",
            Value: telephoneNumber
        }));

        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
            Name:"custom:confirmationCode",
            Value: confirmationCode
        }));
 
        const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        userPool.signUp(telephoneNumber, password, attributeList, null, function(err, result) {
            if(err) {
                return resolve({
                    statusCode: 500,
                    err
                })
            }

            resolve({
                statusCode: 200,
                confirmationCode,
                message: 'User successfully registered'
            })
        })
    })
}

exports.handler =  async function(event, context, callback) {
    const json = JSON.parse(event.body)
    const result = await registerUser(json)

    callback(null, {
        statusCode: result.statusCode,
        body: JSON.stringify(result)
    })
}