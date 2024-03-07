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
exports.addJob = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const addJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jobTitle } = req.body;
        const job = new AdminSchema_1.JobModel({
            jobTitle,
        });
        yield job.save();
        res.status(201).json({
            message: "Job added successfully",
            job,
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.addJob = addJob;
