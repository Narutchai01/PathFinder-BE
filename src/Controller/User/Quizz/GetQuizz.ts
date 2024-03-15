import { Request,Response } from "express";
import { QuizzModel } from "../../../Model/AdminSchema";

export const GetQuizz = async (req: Request, res: Response) => {
    try {
        const result = await QuizzModel.find().populate("choies");
        res.status(200).send(result);
    } catch (error:any) {
        console.log(error.message);
    }
}; 