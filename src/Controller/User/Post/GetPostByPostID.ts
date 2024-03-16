import { Request,Response } from "express";
import { PostModel } from "../../../Model/UserSchema";


export const GetPostByPostID = async (req: Request, res: Response) => {
    try {
        const { PostID } = req.query;
        const post = await PostModel.findById(PostID).populate("OwnerID").populate({ path: "Comments", populate: { path: "OwnerID" } });
        res.status(200).json(post);
    } catch (error: any) {
        console.log(error.message);
    }
};