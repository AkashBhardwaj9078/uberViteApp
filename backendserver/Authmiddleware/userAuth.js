const usermodel =require('../models/usermodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const BlacklistToken=require("../models/blacklistToken")

module.exports.isAuth=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        });
    }
    try {
        const isBlacklisted=await BlacklistToken.findOne({ token: token });
        if (isBlacklisted) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        const decoded=await jwt.verify(token,process.env.SECRET_KEY);
        const user=await usermodel.findById(decoded._id);
        if(!user){
            return res.status(401).json({
                message:"Unauthorized"
            });
        }
        req.user=user;
        next();
    } catch (err) {
        return res.status(401).json({
            message:"Unauthorized",
            error: err.message
        });
    }
}