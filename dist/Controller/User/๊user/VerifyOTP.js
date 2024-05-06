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
exports.VerifyOTP = void 0;
const UserSchema_1 = require("../../../Model/UserSchema");
const dayjs_1 = __importDefault(require("dayjs"));
const VerifyOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { OTP } = req.body;
        const verifyOTP = yield UserSchema_1.RecoveryModel.findOne({ OTP: OTP })
            .where("dateCreate")
            .gte(Number((0, dayjs_1.default)().subtract(5, "minute").toDate()))
            .exec();
        if (!verifyOTP) {
            return res.status(400).json({ message: "OTP is invalid or expired" });
        }
        res.status(200).json({ message: "OTP is valid" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.VerifyOTP = VerifyOTP;
