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
exports.ChagePassWordByForgetpassword = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const PasswordManager_1 = require("../../../utils/PasswordManager");
const ChagePassWordByForgetpassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const finduser = yield UserSchema_1.UserModel.findOne({
            email,
        });
        if (!finduser) {
            return res.status(400).json({ message: "User not found" });
        }
        const hash = yield (0, PasswordManager_1.hashPassword)(password);
        yield UserSchema_1.UserModel.updateOne({ email }, {
            password: hash,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ChagePassWordByForgetpassword = ChagePassWordByForgetpassword;
