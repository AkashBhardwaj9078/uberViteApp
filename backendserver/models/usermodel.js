const mongoose=require("mongoose")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    Fullname:{
        First_name:{
            type:String,
            required:true,
            min:[3,"First name must be atleast 3 characters long"]
        }
        ,
        Last_name:{
            type:String,
         
            min:[3,"Last name must be atleast 3 characters long"]
        }
        
    }
    ,
    Email:{
        type:String,
        required:true,
        unique:true,
        

    }
    ,
    Password:{
        select:false,
        type:String,
        required:true,
    }
    ,
    socketId:{
        type:String,
        default: ""
    }
    

})

userSchema.methods.getToken=function(){
    const token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
    return token;
}

userSchema.methods.hashPassword= async function(Password){
    const hash=await bcrypt.hash(Password,10);
    return hash;
}

userSchema.methods.comparePassword=async function(enteredPassword){
    const isverifed=await bcrypt.compare(enteredPassword,this.Password);
    return isverifed
}

const usermodel=mongoose.model("user",userSchema)

module.exports=usermodel