import { Request,Response } from "express";
import { UserModel } from "../../Model/UserSchema";


export const getUser = async (req:Request,res:Response) => {
    try {
        const user = await UserModel.find({});
        res.status(200).json(user);
    } catch (error:any) {
        console.log(error.message);
    }
};