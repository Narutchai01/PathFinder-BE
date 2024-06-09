import { Request, Response } from "express";
import { PostModel } from "../../../Model/UserSchema";
import { uploadImagePost } from "../../../utils/UploadImage";

export const UpdatePost = async (req: Request, res: Response) => {
  try {
    const { Postid } = req.params;
    let file = req.file;
    const { PostTitle, descriptionPost } = req.body;


    const Post = await PostModel.findById(Postid);

    if (!Post) {
      return res.status(404).send("Post not found");
    }


   await PostModel.findByIdAndUpdate(Postid, {
        PostTitle : PostTitle ? PostTitle : Post.PostTitle,
        descriptionPost : descriptionPost ? descriptionPost : Post.descriptionPost,
        PostImage: file ? await uploadImagePost(file) : Post.PostImage,
    });



    res.status(200).send("Post updated successfully!");
  } catch (error) {
    console.log(error);
  }
};
