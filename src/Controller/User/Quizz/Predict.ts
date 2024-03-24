import { Request, Response } from "express";
import { ChoiseModel, WeightModel } from "../../../Model/AdminSchema";

export const Predict = async (req: Request, res: Response) => {
  try {
    const weightID: string[] = [];
    const { choiseARR } = req.body;
    const choise = await ChoiseModel.find({ _id: choiseARR }).populate(
      "weight"
    );
    choise.map((item: any) =>
      item.weight.map((item: any) => weightID.push(item._id))
    );
    const weight = await WeightModel.find({ _id: weightID });
    const ARRValue = weight.map((item: any) => ({
      JobID: item.jobID,
      value: item.weight,
    }));
 
    res.status(200).json({
        status: true,
        message: "Predict",
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
