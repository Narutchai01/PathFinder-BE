import { Request,Response } from "express";
import { QuizzModel } from "../../../Model/AdminSchema";
import mongoose from "mongoose";


export const EditQuizz = async (req: Request, res: Response) => {
    try {
        const quizzID = new mongoose.Types.ObjectId(req.params.quizzID);
        const {quizzTitle} = req.body;
        const result = await QuizzModel.findByIdAndUpdate(quizzID, {quizzTitle: quizzTitle});
        if (!result) {
            return res.status(400).send({
                message: "Quizz Not Found",
            });
        }
        res.status(200).send({
            message: "Quizz Updated",
        });
    } catch (error:any) {
        console.log(error.message);
    }
};