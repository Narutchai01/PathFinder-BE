import { Request, Response } from "express";
import { CommentModel, PostModel } from "../../../Model/UserSchema";

export const CreateComment = async (req: Request, res: Response) => {
  try {
    const { comment, PostID, OwnerID } = req.body;
    const newComment = new CommentModel({
      comment,
      PostID,
      OwnerID,
    });
    await newComment.save();
    const findPost = await PostModel.findById(PostID);
    if (!findPost) {
      return res.status(404).send("Post not found");
    }
    await findPost?.updateOne({ $push: { Comments: newComment._id } });
    res.status(201).send("Comment created successfully!");
  } catch (error: any) {
    console.log(error.message);
  }
};
