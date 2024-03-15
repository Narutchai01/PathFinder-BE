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
exports.EditChoies = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const mongoose_1 = __importDefault(require("mongoose"));
const EditChoies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const choiesID = new mongoose_1.default.Types.ObjectId(req.params.choiesID);
        const { answer } = req.body;
        const result = yield AdminSchema_1.ChoiseModel.findByIdAndUpdate(choiesID, { answer: answer });
        if (!result) {
            return res.status(400).send({
                message: "Choise Not Found",
            });
        }
        res.status(200).send({
            message: "Choise Updated",
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.EditChoies = EditChoies;
