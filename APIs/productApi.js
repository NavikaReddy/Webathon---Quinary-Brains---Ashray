const exp=require("express")
const prodApp=exp.Router()
const expressAsyncHandler = require('express-async-handler')

// let products=[];
//get products
// prodApp.get("/get-products",(request,response)=>{
//     response.send({message:"All products",payload:products})
// })
// //get product by id
// prodApp.get("/get-product/:id",(request,response)=>{
//     //get id from url
//     let prodId=(+request.params.id)
//     //search the prod obj in prod array by its id
//     let prod=products.find(prodObj=>prodObj.id===prodId)
//     //send response
//     response.send({message:"One product",payload:prod})
// })
// //body parser middleware
// prodApp.use(exp.json())
// //create product
// prodApp.post("/create-product",(request,response)=>{
//     let newProd=request.body
//     products.push(newProd)
//     response.send({message:"New Product added"})
// })
// //update product
// prodApp.put("/update-product",(request,response)=>{
//     let modifiedProd=request.body;
//     let indexOfExistingProduct=products.findIndex(prodObj=>prodObj.id===modifiedProd.id)
//     products.splice(indexOfExistingProduct,1,modifiedProd)
//     if(indexOfExistingProduct===-1)
//     {
//         response.send({message:"Product not found to modify"})
//     }
//     else
//     {
//         response.send({message:"Product modified"})
//     }
// })

// //delete product
// prodApp.delete("/delete-product/:id",(request,response)=>{
//     let prodId=(+request.params.id)
//     let IndexOfProdToRemove=products.findIndex(prodObj=>prodObj.id===prodId)
//     products.splice(IndexOfProdToRemove,1)
//     if(IndexOfProdToRemove===-1)
//     {
//         response.send({message:"Product not found to delete"})
//     }
//     else
//     {
//         response.send({message:"Product deleted"})
//     }
// })


//get products


prodApp.use(exp.json())//body parser middleware

prodApp.get("/get-products",expressAsyncHandler(async(request,response)=>{
    //get products collection obj
    const productCollectionObj=request.app.get("productCollectionObj")
    //get products from db
    let prodList = await productCollectionObj.find().toArray()
        response.status(200).send({message:"List of Products",payload:prodList})
}))

//get product by id
prodApp.get("/get-product/:id",expressAsyncHandler(async(request,response)=>{
    //get products collection obj
    const productCollectionObj = request.app.get("productCollectionObj")

    //get id from url
    let prodId = (+request.params.id)

    //find prod
    let prodObj = await productCollectionObj.findOne({id:prodId})
        response.status(200).send({message:"Product",payload:prodObj})
}))


//create product
prodApp.post("/create-product",expressAsyncHandler(async(request,response)=>{
    //get product collection  obj
    const productCollectionObj = request.app.get("productCollectionObj")

    //get new product from body of request
    let newProd = request.body

    //add newProd in db
    let dbRes = await productCollectionObj.insertOne(newProd)
        response.status(201).send({message:"New product added"})
}))

//update product
prodApp.put("/update-product",expressAsyncHandler(async(request,response)=>{
    //get product collection obj
    const productCollectionObj = request.app.get("productCollectionObj")

    //get modified product from body of request
    let modifiedProd = request.body

    //modify product in db
    let dbRes = await productCollectionObj.updateOne({id:modifiedProd.id},{$set:{...modifiedProd}})
        response.status(200).send({message:"Product updated"})
})
)
//delete product
prodApp.delete("/delete-product/:id",expressAsyncHandler(async(request,response)=>{
    //get product collection obj
    const productCollectionObj= request.app.get("productCollectionObj")

    //get id of prod from url
    let prodId = (+request.params.id)

    //delete product from db
    let dbRes = await productCollectionObj.deleteOne({id:prodId})
        response.status(200).send({message:"Product deleted"})
}))
module.exports=prodApp