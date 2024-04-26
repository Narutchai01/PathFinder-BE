import { Request, Response } from "express";
import { JobModel } from "../../../Model/AdminSchema";
import { ResultModel } from "../../../Model/UserSchema";
import { mongo } from "mongoose";

export const GetResultPrediction = async (req: Request, res: Response) => {
  try {
    const reusult_id = req.params.reusult_id;
    const result = await ResultModel.findById(reusult_id).populate("jobID");
    
    res.status(200).json(result);
  } catch (error: any) {
    console.log(error);
  }
};
