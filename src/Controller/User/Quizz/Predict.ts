import { Request, Response } from "express";
import { ChoiseModel, WeightModel, JobModel } from "../../../Model/AdminSchema";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";
import { ResultModel } from "../../../Model/UserSchema";

export const Predict = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    const { choiseARR } = req.body;
    const weightID: string[] = [];
    const choise = await ChoiseModel.find({ _id: choiseARR }).populate(
      "weight"
    );
    choise.map((item: any) =>
      item.weight.map((item: any) => weightID.push(item._id))
    );
    const weight = await WeightModel.find({ _id: weightID });

    const totalWeights = weight.reduce((acc: any, curr: any) => {
      if (!acc[curr.jobID]) {
        acc[curr.jobID] = { weight: 0, maxWeight: 0, maxJobID: null };
      }
      acc[curr.jobID].weight += curr.weight;
      if (acc[curr.jobID].weight > acc[curr.jobID].maxWeight) {
        acc[curr.jobID].maxWeight = acc[curr.jobID].weight;
        acc[curr.jobID].maxJobID = curr.jobID;
      }
      return acc;
    }, {});

    // Find the maximum weight
    let maxWeight = 0;
    let maxJobID = null;
    for (const jobID in totalWeights) {
      if (totalWeights[jobID].maxWeight > maxWeight) {
        maxWeight = totalWeights[jobID].maxWeight;
        maxJobID = totalWeights[jobID].maxJobID;
      }
    }

    if (token) {
      const validToken = jwt.verify(token, String(secret_jwt));
      if (!validToken) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const userID :any = (validToken as {UserID:any}).UserID;
      const result = new ResultModel({
        jobID : maxJobID,
        userID : userID,
      })
      await result.save();
      return res.status(200).json({ message: "Success" ,  result : result._id });
    } else {
      const result = new ResultModel({
        userID : null,
        jobID : maxJobID,
      });
      await result.save();
      return res.status(200).json({ message: "Success" ,  result : result._id });
    }

  } catch (error: any) {
    console.log(error.message);
  }
};
