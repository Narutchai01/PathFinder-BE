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
exports.forgetPasswordSendEmail = void 0;
const SendEmail_1 = require("../../../utils/SendEmail");
const forgetPasswordSendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailUser } = req.body;
        const sendemail = yield (0, SendEmail_1.sendEmail)(emailUser);
        if (sendemail) {
            res.status(200).json({ message: "Email sent" });
        }
        else {
            res.status(400).json({ message: "Email not sent" });
        }
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.forgetPasswordSendEmail = forgetPasswordSendEmail;
