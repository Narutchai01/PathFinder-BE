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
exports.EditProfile = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config/config");
const EditProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const validToken = jsonwebtoken_1.default.verify(token, String(config_1.secret_jwt));
        if (!validToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const { firstname, lastname, username, email } = req.body;
        const OwnerID = validToken.UserID;
        const userData = yield UserSchema_1.UserModel.findById(OwnerID);
        yield UserSchema_1.UserModel.findByIdAndUpdate(OwnerID, {
            firstname: firstname ? firstname : userData === null || userData === void 0 ? void 0 : userData.firstname,
            lastname: lastname ? lastname : userData === null || userData === void 0 ? void 0 : userData.lastname,
            username: username ? username : userData === null || userData === void 0 ? void 0 : userData.username,
            email: email ? email : userData === null || userData === void 0 ? void 0 : userData.email,
        });
        res.status(200).json({ message: "Profile updated successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.EditProfile = EditProfile;
