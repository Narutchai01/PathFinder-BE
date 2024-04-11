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
exports.Predict = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../config/config");
const UserSchema_1 = require("../../../Model/UserSchema");
const Predict = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const validToken = jsonwebtoken_1.default.verify(token, String(config_1.secret_jwt));
        if (!validToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const weightID = [];
        const { choiseARR } = req.body;
        const choise = yield AdminSchema_1.ChoiseModel.find({ _id: choiseARR }).populate("weight");
        choise.map((item) => item.weight.map((item) => weightID.push(item._id)));
        const weight = yield AdminSchema_1.WeightModel.find({ _id: weightID });
        const totalWeights = weight.reduce((acc, curr) => {
            if (!acc[curr.jobID]) {
                acc[curr.jobID] = { weight: 0, maxWeight: 0, maxJobID: null };
            }
            acc[curr.jobID].weight += curr.weight;
            if (acc[curr.jobID].weight > acc[curr.jobID].maxWeight) {
                acc[curr.jobID].maxWeight = acc[curr.jobID].weight;
                acc[curr.jobID].maxJobID = curr.jobID;
            }
            return acc;
        }, {});
        // Find the maximum weight
        let maxWeight = 0;
        let maxJobID = null;
        for (const jobID in totalWeights) {
            if (totalWeights[jobID].maxWeight > maxWeight) {
                maxWeight = totalWeights[jobID].maxWeight;
                maxJobID = totalWeights[jobID].maxJobID;
            }
        }
        const userID = validToken.UserID;
        const result = new UserSchema_1.ResultModel({
            jobID: maxJobID,
            userID: userID,
        });
        yield result.save();
        res.status(200).json({
            message: "Predicted",
            result: result._id
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.Predict = Predict;
