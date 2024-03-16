import { Request,Response } from "express";
import { PostModel ,CommentModel } from "../../../Model/UserSchema";


export const DeleletPost = async (req: Request, res: Response) => {
    try {
        const { PostID } = req.query;
        const post = await PostModel.findById(PostID);
        if(post){
            await CommentModel.deleteMany({ _id: { $in: post.Comments } });
            await post.deleteOne();
            res.status(200).json({message:"Post Deleted"});
        }else{
            res.status(404).json({message:"Post Not Found"});
        }
    } catch (error: any) {
        console.log(error.message);
    }
};