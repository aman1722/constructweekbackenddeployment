const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token,"evaluation")
        if(decoded){
            req.body.userId=decoded.userId
            next();
        }else{
            res.status(400).send({"msg":"Please Login Fisrt!"})
        }
    }else{
        res.status(400).send({"msg":"Please Login Fisrt!"})
    }
}


module.exports={
    auth
}