import { Request, Response } from "express";
import { PostModel } from "../../../Model/UserSchema";

export const CreatePost = async (req: Request, res: Response) => {
  try {
    const {PostTitle, OwnerID} = req.body;
    const post = new PostModel({
      PostTitle,
      OwnerID,
    });
    await post.save();
    res.status(201).send("Post created successfully!");
  } catch (error: any) {
    console.log(error.message);
  }
};
