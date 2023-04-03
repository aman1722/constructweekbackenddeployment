const express = require("express")
const {ProductModel}=require("../model/product.model")

const productRouter = express.Router()



//get all product
productRouter.get("/", async(req,res)=>{
    const {page,limit} = req.query
    try {
      // const count = await ProductModel.find();
      const data = await ProductModel.find().limit(limit).skip(page);
      res.status(200).send(data)

    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
})

//pagination
productRouter.get("/:page",async(req,res)=>{
 const limit = 16;
 let page_no = req.params.page>=1?req.params.page:1;
 page_no=page_no-1;
 try {
  const data = await ProductModel.find().limit(limit).skip(limit*page_no)
  res.status(200).send(data)
 } catch (error) {
  res.status(400).send({"msg":error.message})
 }
})

//add a new product
productRouter.post("/add",async(req,res)=>{
    console.log(req.body)
    try {
      const product = new ProductModel(req.body)
      await product.save()
      res.status(200).send({"msg":"A new Product is added!"})
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
  
})




module.exports={
    productRouter
}
