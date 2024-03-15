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
exports.LoginUserController = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const PasswordManager_1 = require("../../../utils/PasswordManager");
const LoginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield UserSchema_1.UserModel.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isPasswordValid = yield (0, PasswordManager_1.comparePassword)(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        res.status(200).json({ message: "Login Success" });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.LoginUserController = LoginUserController;
