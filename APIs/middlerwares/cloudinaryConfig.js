const cloudinary = require("cloudinary").v2;//version- 2 // default export
const multer = require("multer")//default export
const {CloudinaryStorage}= require("multer-storage-cloudinary")//named export
require('dotenv').config()
//configure cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

//configure cloudinary storage
let clStorage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"user-management-application",
        public_id:(request,file)=>file.fieldname+"-"+Date.now()//time stamp for now overriding
    }
})

//configure multer
let multerObj=multer({storage:clStorage})

//export multerObj
module.exports = multerObj