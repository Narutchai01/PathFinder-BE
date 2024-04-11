import { Schema ,model} from "mongoose";
import { CommentInterface, PostInterface, UserInterface ,ResultInterface } from "../interface/Model";


const User = new Schema<UserInterface>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    school : String,
    education_level : String,
    birhDate : Date,
});

export const UserModel = model<UserInterface>("User", User);


const Post = new Schema<PostInterface>({
    PostTitle: {
        type: String,
        required: true
    },
    OwnerID : {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    Comments : [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    PostImage : String,
    descriptionPost : String
});

export const PostModel = model("Post", Post);

const Comment = new Schema<CommentInterface>({
    comment: {
        type: String,
        required: true
    },
    PostID : {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    OwnerID : {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

export const CommentModel = model("Comment", Comment);


const Result = new Schema<ResultInterface>(
    {
        jobID: {
            type: Schema.Types.ObjectId,
            ref: "Job"
        },
        userID : {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    }
);

export const ResultModel = model("Result", Result);