const jwt=require("jsonwebtoken")
require('dotenv').config()

//write a middleware function to verify token
const verifyToken=(request,response,next)=>{

    //get bearer token from req header
    const bearerToken=request.headers.authorization//bearer token
    //if bearer token not found
    if(bearerToken===undefined)
    {
        response.send({message:"Unauthorised access...Pls login first"})
    }
    //if bearer token is exists
    else
    {
        //get token from bearer token
        //bearer token consists of string white space and token from which we 
        //have to extract the token
        //split method takes the string and separates into an array
        const token = bearerToken.split(" ")[1]//["bearer",token]
        //verify token
        //at time of creation of token we used a secret key which is encoded
        //for verifcation we have to use secret key to decode the same
        try
        {
            jwt.verify(token,process.env.SECRET_KEY)
            //calling next middleware
            next()
        }
        catch(err){
            //forward err to err handling middleware
            next(new Error("Session expired ..pls relogin to continue"))
        }    
    }
}


module.exports=verifyToken;