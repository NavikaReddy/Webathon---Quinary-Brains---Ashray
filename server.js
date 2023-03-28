//create express application
const exp=require("express")
//when we import a module we get content of the module in the variable
//we export the content of the module and get the content when imported
//exp recieves a function called createapplication
const app=exp()
//express object internally contains http server so we dont need to import http server
require('dotenv').config()


//assign port number
const port=process.env.PORT||3500
app.listen(port,()=>console.log("web server listening in port 3500"))

const path = require("path")
//connect react build - react application
app.use(exp.static(path.join(__dirname,'./build')))//__dirname-path of current file


//get mongo client
const mclient = require("mongodb").MongoClient

//connect DB server using mongo client
//database url- data base protocol->127.0.0.1
mclient.connect("mongodb://127.0.0.1/27017")
.then((dbRef)=>{//if connected succesfully it gets database refernece

    //connect to a database
    const dbObj=dbRef.db("webuser")
    //connect to collections of this database
    const usersCollectionObj = dbObj.collection("webathon");
    //share collections to apis
    //express object has a method called set it takes 2 methods key and value
    app.set('usersCollectionObj',usersCollectionObj)
    console.log("DB connection success")
})
.catch(err=>console.log("data base connect error : ",err))





//import userApp
const userApp=require("./APIs/usersApi")


//execute user api when path starts with /user-api

app.use('/user-api',userApp)
//execute user api when path starts with /product-api




//page refresh
app.use('/*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'),err=>{
        if(err)
        {
            next(err)
        }
    })
})

//invalid path
const invalidPathMiddleware=(request,response,next)=>{
    response.send({message:"Invalid path"})
}
app.use("*",invalidPathMiddleware)

//error handling middleware
const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message})
}

app.use(errorHandlingMiddleware)