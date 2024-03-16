import { PayLoadUser } from './../../../interface/Model';
import { Request,Response } from "express";
import { UserModel } from "../../../Model/UserSchema";
import { comparePassword } from "../../../utils/PasswordManager";
import jwt from "jsonwebtoken"
import { secret_jwt } from '../../../config/config';


export const LoginUserController = async (req:Request,res:Response) => {
    try {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email:email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const isPasswordValid = await comparePassword(password,user.password);        
        if (!isPasswordValid) {
            return res.status(400).json({message:"Invalid Password"});
        }
        const payload = jwt.sign({UserID : user._id},String(secret_jwt),{algorithm : "HS256"})
        res.cookie("token",payload,{httpOnly : true})
        res.status(200).json({message:"Login Success",payload:payload});
    } catch (error:any) {
        console.log(error.message);
    }
};   