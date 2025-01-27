const captainModel=require("../models/captainmodel")
const validator=require('express-validator')
const BlacklistToken=require('../models/blacklistToken')

module.exports.Register=async(req,res,next)=>{
   const err=validator.validationResult(req);
   if(!err.isEmpty()){
    return res.status(401).json({
        message:err.array()
    })
   }
   const {fullname, email ,password,vehicle}=req.body;

   if(!fullname || !email || !password ||!vehicle){
    throw new Error("All fields are required")
   }
 

  const IsAlreadyExist=await captainModel.findOne({email:email});
  if(IsAlreadyExist){
    return res.status(401).json({
        message:"Email already exist"
    })
  }


   const hash = await captainModel.hashPassword(password);
   

   const captain=await captainModel.create({
     fullname,
     email,
     password: hash,
     vehicle

   })

   const token=captain.generateAuthToken();
   

   return res.status(201).json({
    token,captain
   })
   
}

module.exports.Login=async(req,res,next)=>{
    const err=validator.validationResult(req);
    if(!err.isEmpty()){
     return res.status(401).json({
         message:err.array()
     })
    }

    const {email,password}=req.body;
    if(!email || !password ){
        throw new Error("All fields are required")
    }

    const captain=await captainModel.findOne({email}).select('+password')

    if(!captain){
        return res.status(401).json({
            message:"Invalid email or Password"
        })

    } 
   
    const isMatch=await captain.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({
            message:"Invalid email or Password"
        })
    }

    const token=await captain.generateAuthToken();

    res.cookie("token",token,{expiresIn:"1d"})

    return res.status(201).json({
        token,captain
    })

    
}

module.exports.getProfile=async(req,res,next)=>{
    return res.status(201).json(req.captain);
}

module.exports.Logout=async(req,res,next)=>{
    res.clearCookie("token")
    const token=req.cookies.token||req.headers.authorization?.split(' ')[1];
    await BlacklistToken.create({
        token
    })

    res.status(201).json({
        message:"Successfully Logged out"
    })
}