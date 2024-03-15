import { Request,Response } from "express";
import { ChoiseModel } from "../../../Model/AdminSchema";
import mongoose from "mongoose";


export const EditChoies = async (req: Request, res: Response) => {
    try {
       const choiesID = new mongoose.Types.ObjectId(req.params.choiesID);
        const {answer} = req.body;
        const result = await ChoiseModel.findByIdAndUpdate(choiesID, {answer: answer});
        if (!result) {
            return res.status(400).send({
                message: "Choise Not Found",
            });
        }
        res.status(200).send({
            message: "Choise Updated",
        }); 
    } catch (error:any) {
        console.log(error.message);
    }
};