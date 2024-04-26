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
exports.CreateQuizz = void 0;
const AdminSchema_1 = require("../../../Model/AdminSchema");
const UploadImage_1 = require("../../../utils/UploadImage");
const CreateQuizz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let { data } = req.body;
        const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer;
        data = JSON.parse(data);
        const { quizzTitle, questions } = data;
        const ImageQuizz = yield (0, UploadImage_1.uploadImageQuizz)(file);
        const quizz = new AdminSchema_1.QuizzModel({
            quizzTitle,
            ImageQuizz,
        });
        const choises = yield Promise.all(questions.map((question) => __awaiter(void 0, void 0, void 0, function* () {
            const choise = new AdminSchema_1.ChoiseModel({
                answer: question.title,
            });
            const weight_id = Promise.all(question.weight.map((weightData) => __awaiter(void 0, void 0, void 0, function* () {
                const { jobID, weight } = weightData;
                const weightModel = new AdminSchema_1.WeightModel({
                    jobID,
                    weight: weight,
                });
                weightModel.save();
                return weightModel._id;
            })));
            choise.weight = yield weight_id;
            return choise;
        })));
        const choise_id = choises.map((choise) => choise._id);
        yield AdminSchema_1.ChoiseModel.insertMany(choises);
        quizz.choies = choise_id;
        yield quizz.save();
        res.status(201).json({
            message: "Quizz created successfully",
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.CreateQuizz = CreateQuizz;
