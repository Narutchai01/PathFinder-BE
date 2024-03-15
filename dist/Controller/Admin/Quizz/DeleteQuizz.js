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
exports.DeleteQuizz = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const DeleteQuizz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quizzID } = req.params;
        const deleteQuizz = yield AdminSchema_1.QuizzModel.findByIdAndDelete(quizzID);
        if (!deleteQuizz) {
            return res.status(404).json({ message: "Quizz not found" });
        }
        res.status(200).json({ message: "Quizz deleted successfully" });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.DeleteQuizz = DeleteQuizz;
