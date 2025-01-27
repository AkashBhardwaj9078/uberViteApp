const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')
const captainModel=require('../models/captainmodel')
const BlacklistToken=require("../models/blacklistToken")

module.exports.isCaptainAuth=async(req,res,next)=>{

    const token=req.cookies.token||req.headers.authentication?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    try{
        const isBlacklist=await BlacklistToken.findOne({token:token});
        if(isBlacklist){
            return res.status(401).json({
                message:"Unauthorized"
            })

        }
        const decoded= await jwt.verify(token,process.env.SECRET_KEY);
        const captain=await captainModel.findById(decoded._id)
        req.captain=captain;
        return next()
    }
    catch{
        return res.status(401).json({
            message:"Unauthorized"
        })

    }
}

