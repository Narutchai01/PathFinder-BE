import { Request,Response } from "express";
import { UserModel } from "../../Model/UserSchema";
import { comparePassword } from "../../utils/PasswordManager";


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
        res.status(200).json({message:"Login Success"});
    } catch (error:any) {
        console.log(error.message);
    }
};   