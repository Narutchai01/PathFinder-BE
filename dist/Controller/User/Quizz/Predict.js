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
exports.Predict = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const Predict = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const weightID = [];
        const { choiseARR } = req.body;
        const choise = yield AdminSchema_1.ChoiseModel.find({ _id: choiseARR }).populate("weight");
        choise.map((item) => item.weight.map((item) => weightID.push(item._id)));
        const weight = yield AdminSchema_1.WeightModel.find({ _id: weightID });
        const ARRValue = weight.map((item) => ({
            JobID: item.jobID,
            value: item.weight,
        }));
        res.status(200).json({
            status: true,
            message: "Predict",
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.Predict = Predict;
