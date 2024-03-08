import { Request, Response } from "express";
import { JobModel } from "../../../Model/AdminSchema";
import mongoose, { ObjectId } from "mongoose";

export const Editejob = async (req: Request, res: Response) => {
    try {
        const jobid = new mongoose.Types.ObjectId(req.params.jobid);
        const { jobTitle } = req.body;
        await JobModel.updateOne({ _id: jobid }, { $set: { jobTitle: jobTitle } });
        res.status(200).json({ message: "Job Title Updated Successfully" });
    } catch (error: any) {
        console.log(error.message);
    }
};