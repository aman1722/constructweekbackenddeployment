const mongoose = require("mongoose")


//User Schema
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    Phone_no:Number
},{
    versionKey:false
})

//User model
const UserModel = mongoose.model("user",userSchema)



module.exports={
    UserModel
}