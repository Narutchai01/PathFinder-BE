import { Request, Response } from "express";
import { CommentModel, PostModel } from "../../../Model/UserSchema";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";
export const CreateComment = async (req: Request, res: Response) => {
  try {
    const { comment, PostID} = req.body;
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).send("Invalid Token");
    }
    const validToken = jwt.verify(token, String(secret_jwt));
    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }
    const OwnerID = (validToken as { UserID: any }).UserID;
  
    const newComment = new CommentModel({
      comment,
      PostID,
      OwnerID,
    });
    const findPost = await PostModel.findById(PostID);
    if (!findPost) {
      return res.status(404).send("Post not found");
    }
    await newComment.save();
    await findPost?.updateOne({ $push: { Comments: newComment._id } });
    res.status(201).send("Comment created successfully!");
  } catch (error: any) {
    console.log(error.message);
  }
};
