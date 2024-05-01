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
exports.getUserByUserID = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config/config");
const getUserByUserID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
        }
        const validToken = jsonwebtoken_1.default.verify(token, String(config_1.secret_jwt));
        if (!validToken) {
            res.status(401).json({ message: "Unauthorized" });
        }
        const UserID = validToken.UserID;
        const user = yield UserSchema_1.UserModel.findById(UserID);
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.getUserByUserID = getUserByUserID;
