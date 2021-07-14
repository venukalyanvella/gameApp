const User = require('../model/user.model');

const jwt = require('jsonwebtoken');
const secret = 'task@manager'
// Registering a new user POST-Request

module.exports.createUser = async(request,response,next)=>{

    let userDetails = new User({
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })

    await User.findOne({email:request.body.email})
    .then(user=>{
        if(!user){
            User.create(userDetails).then(user=>{
                console.log("Registration Successfull...");
                return  response.status(200).json({
                      success:true,
                      statusCode:200,
                      data:user
                  })
            }).catch(err=>{
                console.log("Error on adding new User", err);
            return response.status(200).json({
                success:false,
                statusCode:500,
                message:' Error While Registering a User',
                data:null
            })
            })
        }
    }).catch(err=>{
        console.log('Error server api ');
        return response.status(200).json({
            success:false,
            statusCode:500,
            message:' Error While Registering a User',
            data:null
        })
    })



}

module.exports.loginUser = async (request,response)=>{

        console.log(request.body);
    let result ={}
    await User.findOne({username:request.body.username})
            .then(user=>{
                if(user.length != 0){

                    if(user.password == request.body.password){
                        const payload = {
                            _id:user._id,
                            username:user.username,
                            email:user.email
                        }
                        let accesstoken = jwt.sign(payload,secret);
                        let refreshToken = jwt.sign(payload,secret,{expiresIn:'1h'});
                        result = {
                            success:true,
                            statusCode:200,
                            message:'Login Successfull',
                            token:accesstoken,
                            rtoken:refreshToken
                        }
                    }
                   

                }else {
                    console.log('No Users Found with this Credentials');
                    result = {
                        success:false,
                        statusCode:4010,
                        message:'Password Not Match',
                        data:null
                    }
                }


            }).catch((err)=>{
                console.log('Invalid Credentials');
                result = {
                    success:false,
                    statusCode:401,
                    message:'Invalid Credentials',
                    data:null

                }
            })

            return response.status(200).json(result);


}

