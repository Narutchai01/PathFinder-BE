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
exports.CreatePost = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config/config");
const UploadImage_1 = require("../../../utils/UploadImage");
const CreatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { PostTitle, descriptionPost } = req.body;
        const file = req.file;
        const token = req.cookies.token;
        const validToken = jsonwebtoken_1.default.verify(token, String(config_1.secret_jwt));
        if (!validToken) {
            return res.status(400).send("Invalid Token");
        }
        if (!file) {
            return res.status(400).send("Please upload a file");
        }
        const imageUrl = yield (0, UploadImage_1.uploadImagePost)(file);
        const OwnerID = validToken.UserID;
        const post = new UserSchema_1.PostModel({
            PostTitle,
            OwnerID,
            descriptionPost,
            PostImage: imageUrl,
        });
        yield post.save();
        res.status(201).send("Post created successfully!");
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.CreatePost = CreatePost;
