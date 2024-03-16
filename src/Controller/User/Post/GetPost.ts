import { Request, Response } from "express";
import { PostModel} from "../../../Model/UserSchema";

export const GetPost = async (_req: Request, res: Response) => {
    try {
        const posts = await PostModel.find().populate("OwnerID").populate({ path: "Comments", populate: { path: "OwnerID" } });
        res.status(200).json(posts);
    } catch (error: any) {
        console.log(error.message);
    }
};
