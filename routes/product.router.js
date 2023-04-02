const express = require("express")
const {ProductModel}=require("../model/product.model")

const productRouter = express.Router()



//get all product
productRouter.get("/", async(req,res)=>{
    const {page,limit} = req.query
    try {
      const count = await ProductModel.find();
      const data = await ProductModel.find().limit(limit).skip(page)
      // res.header();
      // console.log(res.headers.get('X-Total-Count'))
      res.setHeader("X-Total-Count", count.length).status(200).send(data)

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
