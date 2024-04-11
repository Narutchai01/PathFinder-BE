import { Request, Response } from "express";
import { PostModel } from "../../../Model/UserSchema";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";
import { uploadImagePost } from "../../../utils/UploadImage";

export const CreatePost = async (req: Request, res: Response) => {
  try {
    const { PostTitle ,descriptionPost } = req.body;
    const file = req.file;
    const token = req.cookies.token;
    const validToken = jwt.verify(token, String(secret_jwt));
    if (!validToken) {
      return res.status(400).send("Invalid Token");
    }
    if (!file) {
      return res.status(400).send("Please upload a file");
    }
    const imageUrl = await uploadImagePost(file);
    const OwnerID = (validToken as { UserID: any }).UserID;
    const post = new PostModel({
      PostTitle,
      OwnerID,
      descriptionPost,
      PostImage: imageUrl,
    });
    await post.save();
    res.status(201).send("Post created successfully!");
  } catch (error: any) {
    console.log(error.message);
  }
};
