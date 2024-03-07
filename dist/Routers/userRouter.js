"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RegisterController_1 = require("../Controller/User/RegisterController");
const LoginUserController_1 = require("../Controller/User/LoginUserController");
const router = express_1.default.Router();
// router.get("/login", loginUserController);
router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register", RegisterController_1.registerController);
router.post("/login", LoginUserController_1.LoginUserController);
exports.default = router;
