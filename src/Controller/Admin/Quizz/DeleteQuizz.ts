import { Request,Response } from "express";
import { QuizzModel } from "../../../Model/AdminSchema";

export const DeleteQuizz = async (req:Request,res:Response) => {
    try {
        const { quizzID } = req.params;
        const deleteQuizz = await QuizzModel.findByIdAndDelete(quizzID);
        if (!deleteQuizz) {
            return res.status(404).json({message:"Quizz not found"});
        }
        res.status(200).json({message:"Quizz deleted successfully"});
    } catch (error:any) {
        console.log(error.message);
        
    }
};