"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultModel = exports.CommentModel = exports.PostModel = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    school: String,
    education_level: String,
    birhDate: Date,
});
exports.UserModel = (0, mongoose_1.model)("User", User);
const Post = new mongoose_1.Schema({
    PostTitle: {
        type: String,
        required: true
    },
    OwnerID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    Comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    PostImage: String,
    descriptionPost: String
});
exports.PostModel = (0, mongoose_1.model)("Post", Post);
const Comment = new mongoose_1.Schema({
    comment: {
        type: String,
        required: true
    },
    PostID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Post"
    },
    OwnerID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    }
});
exports.CommentModel = (0, mongoose_1.model)("Comment", Comment);
const Result = new mongoose_1.Schema({
    jobID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Job"
    },
    userID: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
});
exports.ResultModel = (0, mongoose_1.model)("Result", Result);
