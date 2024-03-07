import { Request,Response } from "express";
import { JobModel } from "../../../Model/AdminSchema";


export const getJob = async (req: Request, res: Response) => {
    try {
        const job = await JobModel.find();
        res.status(200).json({
            message: "All Jobs",
            job,
        }); 
    } catch (error:any) {
        console.log(error.message);
    }
};
