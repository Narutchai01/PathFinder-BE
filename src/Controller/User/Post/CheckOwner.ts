import { Request, Response } from "express";
import { PostModel } from "../../../Model/UserSchema";
import { secret_jwt } from "../../../config/config";
import jwt from "jsonwebtoken";
import { stat } from "fs";

export const CheckOwner = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ status: false});
    }
    const validToken = jwt.verify(token, String(secret_jwt));
    if (!validToken) {
      return res.status(401).json({ status: false });
    }

    const { postID } = req.params;
    const Post = await PostModel.findById(postID);
    if (!Post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const userID = (validToken as { UserID: any }).UserID;

    if (Post.OwnerID == userID) {
      return res.status(200).json({ status: true });
    } else {
        return res.status(200).json({ status: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false });
  }
};
