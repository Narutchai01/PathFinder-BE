import { Request,Response } from "express";
import { UserModel } from "../../../Model/UserSchema";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";


export const getUserByUserID = async (req:Request,res:Response) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({message:"Unauthorized"});
        }
        const validToken = jwt.verify(token,String(secret_jwt));
        if (!validToken) {
            res.status(401).json({message:"Unauthorized"});
        }

        const UserID = (validToken as {UserID:any}).UserID;

        const user = await UserModel.findById(UserID);
        if (!user) {
            res.status(404).json({message:"User not found"});
        }

        res.status(200).json(user);
    } catch (error:any) {
        console.log(error.message);
    }
};