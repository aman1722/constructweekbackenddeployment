const mongoose = require("mongoose")


//Product Schema
const productSchema = mongoose.Schema({
    name:String,
    brand:String,
    category:String,
    Description:String,
    price:Number,
    rating:Number,
    image:String
},{
    versionKey:false
})

//Product model
const ProductModel = mongoose.model("product",productSchema)



module.exports={
    ProductModel
}

