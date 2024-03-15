"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComment = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const CreateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment, PostID, OwnerID } = req.body;
        const newComment = new UserSchema_1.CommentModel({
            comment,
            PostID,
            OwnerID,
        });
        yield newComment.save();
        const findPost = yield UserSchema_1.PostModel.findById(PostID);
        if (!findPost) {
            return res.status(404).send("Post not found");
        }
        yield (findPost === null || findPost === void 0 ? void 0 : findPost.updateOne({ $push: { Comments: newComment._id } }));
        res.status(201).send("Comment created successfully!");
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.CreateComment = CreateComment;
