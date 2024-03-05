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
exports.loginUserController = void 0;
const server_1 = require("../../server");
const PasswordManager_1 = require("../../utils/PasswordManager");
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const db = server_1.client.db("pathFinder");
        const user = db.collection("user");
        const findUser = yield user.findOne({ email: email });
        if (!findUser) {
            res.status(404).json({ message: "User not found!" });
            return;
        }
        const isPasswordMatch = yield (0, PasswordManager_1.comparePassword)(password, findUser.password);
        if (!isPasswordMatch) {
            res.status(400).json({ message: "Invalid password!" });
            return;
        }
        res.status(200).json({ message: "Successfully!" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginUserController = loginUserController;
