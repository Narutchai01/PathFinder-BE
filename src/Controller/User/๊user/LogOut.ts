import { Request,Response } from "express";

export const LogOut = async (req:Request,res:Response) => {
    try {
        res.clearCookie("token");
        res.status(200).json({message:"Logout Success"});
    } catch (error:any) {
        console.log(error.message);
    }
};