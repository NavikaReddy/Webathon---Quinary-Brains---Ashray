//CREATE MINI-EXPRESS APPLICATION
const exp=require("express")
const userApp=exp.Router()
const expressAsyncHandler = require('express-async-handler')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verifyToken=require('./middlerwares/verifyToken')
//import multerObj
const multerObj=require('./middlerwares/cloudinaryConfig')
require('dotenv').config()


    
    

userApp.use(exp.json())//body parser middleware



//create user
//public route
userApp.post("/register",multerObj.single('photo'),expressAsyncHandler(async(request,response)=>{
    //get userscollectionobj
    const usersCollectionObj=request.app.get("usersCollectionObj")
    
    //get new user from request object
    const newUser = JSON.parse(request.body.user)//json.parse()-> used to change string to json obj

    //insert user in database
    //every database request is a blocking requests
    //nodejs deals with blocking requests asynchronously(promise) bcoz if treated sunchronously
    //all other code wont be executed
   
    //check for dupliacte user by username
    let userOfDb = await usersCollectionObj.findOne({email:newUser.email})
    //if user already exists send response to client like "user already exists"
    if(userOfDb!=null)
    {
        response.status(200).send({message:"User already exists!!"})
    }
    //if user not exists
    else
    {

        //add cdn link of cloudinary image to user obj
        newUser.image=request.file.path;

        //hash the password - sensitive data
        //salt is how many times it should hash - that is how secure u want it to be
        //salt value range is from 1 - 10
        let hashedPassword = await bcryptjs.hash(newUser.password,5)
        //console.log(hashedPassword)//$2a$05$k6Tum02EXJkiK00PqSy/pup8mZXQHrE4dHQk6F296.uVp0z0AYDiC
        //replace plain password with hashed password
        newUser.password=hashedPassword
        //save or insert the user
        await usersCollectionObj.insertOne(newUser)
        //send res
        response.status(201).send({message:"User created"})
    }    
}))


//get all users
userApp.get("/get-users",expressAsyncHandler(async(request,response)=>{
    //get users collection obj
    const usersCollectionObj = request.app.get("usersCollectionObj")
    //get users from db
    let usersList = await usersCollectionObj.find().toArray()
    usersList.forEach(function(user){ delete user.password });
    response.status(200).send({message:"List of users",payload:usersList})
}))

//get user by username
//make it as private route
userApp.get("/get-user/:email",verifyToken,expressAsyncHandler(async(request,response)=>{
    //get users collection obj
    const usersCollectionObj = request.app.get("usersCollectionObj")

    //get username for url
    let emailFromUrl = request.params.email

    //find user by username
    const userOfDb = await usersCollectionObj.findOne({email:emailFromUrl})

    //if user does not exist
    if(userOfDb==null)
    {
        response.status(200).send({message:"User not found"})
    }
    //if user does not exist
    else
    {
        //delete password from userOfDb
        delete userOfDb.password
        response.status(200).send({message:"Users",payload:userOfDb})
    }
}))




//user login
//public route
userApp.post("/login",expressAsyncHandler(async(request,response)=>{
    //console.log(request.headers)//contains 2 parts header and body
    //get user collection object
    const usersCollectionObj =request.app.get("usersCollectionObj")

    //user credential from body
    let userCredObj = request.body
    //verify email
    let userOfDb = await usersCollectionObj.findOne({email:userCredObj.email})

    //if email is invalid
    if(userOfDb===null)
    {
         response.status(200).send({message:"Invalid Email"})
    }
    // //if email is valid
    else
    {
         //verify password
        let isEqual = await bcryptjs.compare(userCredObj.password,userOfDb.password)
         //if passwords not matched
         if(isEqual===false)
         {
             response.status(200).send({message:"Wrong Password"})
        }
        //if passwords matched
         else
         {
             //create JWT token 
             //sign method creates and encodes the token
             let jwtToken = jwt.sign({email:userOfDb.email},process.env.SECRET_KEY,{expiresIn:"2 days"})
             //send token in response
    delete userOfDb.password //user property so that client side app should know which user is logged in
    //BUT PASSWORD IS NOT REQUIRED TO KNOW
             response.status(200).send({message:"success",token:jwtToken,user:userOfDb})
         }
     }
}))



//private route
userApp.get("/test",verifyToken,(request,res)=>{
    //console.log(req.headers)//contains 2 parts header and body
    res.send({message:"reply from private route"})
})
 //export user app
 module.exports=userApp

 