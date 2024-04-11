import { json, Request,Response } from "express";
import { JobModel } from "../../../Model/AdminSchema";
import { uploadImageJob } from "../../../utils/UploadImage";


export const addJob = async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        const file = req.file;
        if (!file) {
            return res.status(400).json({message: "Please upload a file"});
        }
        const imageUrl = await uploadImageJob(file);
        const newData = JSON.parse(data);
        const job = new JobModel({
            jobTitle : newData.jobTitle,
            description : newData.description,
            OneDayDo : newData.OneDayDo,
            skills : newData.skills,
            Image : imageUrl
        });
        await job.save();
        res.status(201).send({
            message: "Job added successfully",
            job
        });
    } catch (error:any) {
        console.log(error.message);
        
    }
};