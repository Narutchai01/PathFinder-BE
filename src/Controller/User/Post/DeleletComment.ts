import { Request,Response } from "express";
import { PostModel ,CommentModel } from "../../../Model/UserSchema";


export const DeleletComment = async (req: Request, res: Response) => {
    try {
       const { CommentID } = req.query;
         const comment = await CommentModel.findById(CommentID);
            if(comment){
                await comment.deleteOne();
                await PostModel.updateOne({Comments:CommentID},{$pull:{Comments:CommentID}});
                res.status(200).json({message:"Comment Deleted"});
            }
            else{
                res.status(404).json({message:"Comment Not Found"});
            } 
    } catch (error:any) {
        console.log(error.message);
    
    }
};