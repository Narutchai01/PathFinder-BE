import { Request,Response } from "express";
import { JobModel } from "../../../Model/AdminSchema";


export const addJob = async (req: Request, res: Response) => {
    try {
        const { jobTitle } = req.body;
        const job = new JobModel({
            jobTitle,
        });
        await job.save();
        res.status(201).json({
            message: "Job added successfully",
            job,
        });
    } catch (error:any) {
        console.log(error.message);
        
    }
};