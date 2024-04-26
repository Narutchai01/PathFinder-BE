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
exports.ResultPrediction = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const UserSchema_1 = require("../../../Model/UserSchema");
const mongoose_1 = require("mongoose");
const ResultPrediction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reusult_id = new mongoose_1.mongo.ObjectId(req.params.result_id);
        const result = yield UserSchema_1.ResultModel.findById(reusult_id);
        if (!result) {
            return res.status(404).json({ message: "Result not found" });
        }
        const job = yield AdminSchema_1.JobModel.findById(result.jobID);
        res.status(200).json({ job });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ResultPrediction = ResultPrediction;
