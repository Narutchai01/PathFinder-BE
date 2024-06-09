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
exports.UpdatePost = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const UploadImage_1 = require("../../../utils/UploadImage");
const UpdatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Postid } = req.params;
        let file = req.file;
        const { PostTitle, descriptionPost } = req.body;
        const Post = yield UserSchema_1.PostModel.findById(Postid);
        if (!Post) {
            return res.status(404).send("Post not found");
        }
        yield UserSchema_1.PostModel.findByIdAndUpdate(Postid, {
            PostTitle: PostTitle ? PostTitle : Post.PostTitle,
            descriptionPost: descriptionPost ? descriptionPost : Post.descriptionPost,
            PostImage: file ? yield (0, UploadImage_1.uploadImagePost)(file) : Post.PostImage,
        });
        res.status(200).send("Post updated successfully!");
    }
    catch (error) {
        console.log(error);
    }
});
exports.UpdatePost = UpdatePost;
