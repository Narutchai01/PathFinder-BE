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
const server_1 = require("../../server");
const uuidv4_1 = require("uuidv4");
const PasswordManager_1 = require("../../utils/PasswordManager");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, firstname, lastname, school, education_level, birthdate, email } = req.body;
        const db = server_1.client.db("pathFinder");
        const user = db.collection("user");
        const registerData = {
            userID: (0, uuidv4_1.uuid)(),
            username,
            password: yield (0, PasswordManager_1.hashPassword)(password),
            email,
            firstname,
            lastname,
            school,
            education_level,
            birthdate,
        };
        yield user.insertOne(registerData);
        res.status(200).json({ message: "Successfully!" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerController = registerController;
