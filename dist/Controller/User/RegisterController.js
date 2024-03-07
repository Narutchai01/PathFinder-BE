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
exports.registerController = void 0;
const UserSchema_1 = require("../../Model/UserSchema");
const PasswordManager_1 = require("../../utils/PasswordManager");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email, firstname, lastname, school, education_level, birhDate, } = req.body;
        const user = new UserSchema_1.UserModel({
            username,
            password: yield (0, PasswordManager_1.hashPassword)(password),
            email,
            firstname,
            lastname,
            school,
            education_level,
            birhDate,
        });
        yield user.save();
        res.status(200).send({
            message: "User created successfully",
            user,
        });
    }
    catch (error) {
        console.log("Error on registerController", error.message);
    }
});
exports.registerController = registerController;
