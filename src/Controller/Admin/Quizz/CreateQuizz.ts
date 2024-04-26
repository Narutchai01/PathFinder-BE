import { Request, Response } from "express";
import {
  QuizzModel,
  WeightModel,
  ChoiseModel,
} from "../../../Model/AdminSchema";
import { uploadImageQuizz } from "../../../utils/UploadImage";
import { ObjectId } from "mongoose";

export const CreateQuizz = async (req: Request, res: Response) => {
  try {
    let { data } = req.body;
    const file = req.file?.buffer;
    data = JSON.parse(data);
    const { quizzTitle, questions } = data;
    const ImageQuizz = await uploadImageQuizz(file);
    const quizz = new QuizzModel({
      quizzTitle,
      ImageQuizz,
    });
    

    const choises = await Promise.all(
      questions.map(async (question: any) => {
        const choise = new ChoiseModel({
          answer: question.title,
        });
       const weight_id = Promise.all(
          question.weight.map(async (weightData: any) => {
            const { jobID, weight } = weightData;
            const weightModel = new WeightModel({
              jobID,
              weight: weight,
            });
            weightModel.save();
            return weightModel._id;
          })
        );
        choise.weight = await weight_id;
        return choise;
      })
    );

    const choise_id = choises.map((choise) => choise._id);

    await ChoiseModel.insertMany(choises);
    quizz.choies = choise_id;
    await quizz.save();

    res.status(201).json({
      message: "Quizz created successfully",
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
