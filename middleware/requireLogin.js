const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    const {authorization} = req.headers;
    console.log(authorization)
    if(!authorization){
        return res.status(401).json({
            error:"Can not login"
        })
    }
    const token = authorization.replace('Bearer ','');
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({})
        }
        next();

    })    
}