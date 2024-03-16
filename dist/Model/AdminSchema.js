"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightModel = exports.ChoiseModel = exports.QuizzModel = exports.JobModel = exports.AdminModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const Admin = new mongoose_1.Schema({
    username: String,
    password: String
});
exports.AdminModel = (0, mongoose_1.model)("Admin", Admin);
const Job = new mongoose_1.Schema({
    jobTitle: String
});
exports.JobModel = (0, mongoose_1.model)("Job", Job);
const Quizz = new mongoose_1.Schema({
    quizzTitle: String,
    choies: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Choies"
        }],
});
exports.QuizzModel = (0, mongoose_1.model)("Quizz", Quizz);
const Choise = new mongoose_1.Schema({
    answer: String,
    weight: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Weight"
        }
    ]
});
exports.ChoiseModel = (0, mongoose_1.model)("Choies", Choise);
const Weight = new mongoose_1.Schema({
    jobID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Job"
    },
    weight: Number
});
exports.WeightModel = (0, mongoose_1.model)("Weight", Weight);
