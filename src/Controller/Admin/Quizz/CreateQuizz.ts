import { Request, Response } from "express";
import {
  QuizzModel,
  WeightModel,
  ChoiseModel,
} from "../../../Model/AdminSchema";

export const CreateQuizz = async (req: Request, res: Response) => {
  try {
    const { quizzTitle, questions } = req.body;
    const quizz = new QuizzModel({
      quizzTitle,
    });
    await quizz.save();

    const questionsData = await Promise.all(questions.map(async (question: any) => {  
      const {title ,weight} = question;
      const weightData = weight.map((item: any) => {
      return new WeightModel({
        jobID: item.jobID,
        weight: item.weight,
      })
      });
      await WeightModel.insertMany(weightData);
      const weightID = weightData.map((item: any) => item._id);
      return new ChoiseModel({
      answer: title,
      weight: weightID,
      });
    }));

    await ChoiseModel.insertMany(questionsData);
    quizz.choies = questionsData.map((item: any) => item._id);
    await quizz.save();
    
    
    res.status(201).json("Quizz created successfully");
  } catch (error: any) {
    console.log(error.message);
  }
};
