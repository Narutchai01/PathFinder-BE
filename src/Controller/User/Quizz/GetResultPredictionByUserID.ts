import { Request,Response } from "express";
import { ResultModel } from "../../../Model/UserSchema";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";

export const GetResultPredictionByUserID = async (req: Request, res: Response) => {
    try {
    const token = req.cookies.token;
    if (!token) {
        res.status(400).json({ message: "Token not found" });
        return false;
    }
    const validToken = jwt.verify(token, String(secret_jwt));
    if (!validToken) {
        res.status(400).json({ message: "unauthenrize" });
        return false;
    }

    const userID :any = (validToken as {UserID:any}).UserID;

    const result = await ResultModel.find({userID:userID}).populate("jobID");

    res.status(200).json(result);

    } catch (error: any) {
        console.log(error);
    }
}