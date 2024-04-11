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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComment = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config/config");
const CreateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment, PostID } = req.body;
        const token = req.cookies.token;
        const validToken = jsonwebtoken_1.default.verify(token, String(config_1.secret_jwt));
        if (!validToken) {
            return res.status(400).send("Invalid Token");
        }
        const OwnerID = validToken.UserID;
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
