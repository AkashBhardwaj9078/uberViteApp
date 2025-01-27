const validator=require('express-validator')
const usermodel=require('../models/usermodel')
const blacklistTokenSchema=require("../models/blacklistToken")

module.exports.userRegister= async(req,res,next)=>{
    const errors=validator.validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            message:errors.array()
        });
    }
    const {Fullname,Email,Password}=req.body;
    const userInstance = new usermodel();
    if(!Fullname.First_name ||!Email || !Password){
        throw new Error("All fields are required");
    }
    const hash = await userInstance.hashPassword(Password);
    const user=await usermodel.create({
          Fullname,
          Email,
          Password:hash,
        
    })

    const token=user.getToken();
    return res.status(201).json({
        token,user
    })

}

module.exports.Login=async(req,res,next)=>{
    const errors=validator.validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            message:errors.array()
        });
    }
    const {Email,Password}=req.body
    if(!Email || !Password){
        throw new Error("All fields are required")
    }
    const user=await usermodel.findOne({Email:Email}).select('+Password')

    if(!user){
        return res.status(401).json({
            message:"Invalid Email or Password"
        })
    }

    const isMatch=await user.comparePassword(Password);

    if(!isMatch){
        return res.status(401).json({
            message:"Invalid Email or Password"
        })
    }

    const token=user.getToken();

    res.cookie('token', token, { expiresIn: '1d' });

    res.status(201).json({
           token,user
    })
}

module.exports.getprofile=async(req,res,next)=>{
    res.status(201).json({
        user:req.user
    })

}

module.exports.Logout=async(req,res)=>{
    res.clearCookie('token')
    const token=req.cookies.token||req.headers.authorization?.split(' ')[1]
    await blacklistTokenSchema.create({
        token
    })

    res.status(201).json({
        message:"Successfully Logout"
    })
}

