import { Request, Response } from "express";
import { PostModel } from "../../../Model/UserSchema";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";

export const CreatePost = async (req: Request, res: Response) => {
  try {
    const {PostTitle} = req.body;
    const token = req.cookies.token;
    const validToken = jwt.verify(token, String(secret_jwt));
    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }
    const OwnerID = (validToken as { UserID: any }).UserID;
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
