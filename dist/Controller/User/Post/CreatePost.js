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
exports.CreatePost = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const CreatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { PostTitle, OwnerID } = req.body;
        const post = new UserSchema_1.PostModel({
            PostTitle,
            OwnerID,
        });
        yield post.save();
        res.status(201).send("Post created successfully!");
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.CreatePost = CreatePost;
