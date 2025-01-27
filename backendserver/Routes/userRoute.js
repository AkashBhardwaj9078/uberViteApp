const {body}=require('express-validator');
const userController=require('../Controllers/userControllers')
const authentication=require('../Authmiddleware/userAuth')
const express=require('express')
const router=express.Router()

router.post("/register",[
    body('Fullname.First_name').isLength({min:3}).withMessage("First name must be atleast 3 charcaters long"),
    body('Fullname.Last_name').isLength({min:3}).withMessage("Last name must be atleast 3 charcaters long"),
    body('Email').isEmail().withMessage("Invalid Email"),
    body('Password').isLength({min:6}).withMessage("Password must contain 6 characters"),
    // body('socketId').optional().isString().withMessage("Invalid socketId")
], userController.userRegister)

router.post("/login",[
    body('Email').isEmail().withMessage("Invalid Email"),
    body('Password').isLength({min:6}).withMessage("Password must contain 6 characters")
],
userController.Login
)

router.get("/profile",authentication.isAuth,userController.getprofile)

router.get("/logout",authentication.isAuth,userController.Logout)
module.exports=router