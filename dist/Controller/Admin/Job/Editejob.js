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
exports.Editejob = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const mongoose_1 = __importDefault(require("mongoose"));
const Editejob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobid = new mongoose_1.default.Types.ObjectId(req.params.jobid);
        const { jobTitle } = req.body;
        yield AdminSchema_1.JobModel.updateOne({ _id: jobid }, { $set: { jobTitle: jobTitle } });
        res.status(200).json({ message: "Job Title Updated Successfully" });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.Editejob = Editejob;
