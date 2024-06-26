"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addJob_1 = require("../Controller/Admin/Job/addJob");
const GetJob_1 = require("../Controller/Admin/Job/GetJob");
const Editejob_1 = require("../Controller/Admin/Job/Editejob");
const CreateQuizz_1 = require("../Controller/Admin/Quizz/CreateQuizz");
const EditQuizz_1 = require("../Controller/Admin/Quizz/EditQuizz");
const EditChoies_1 = require("../Controller/Admin/Choies/EditChoies");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send({
        message: "this is admin router",
    });
});
// job router
router.post("/job/addjob", addJob_1.addJob);
router.get("/job/getjob", GetJob_1.getJob);
router.put("/job/editjob/:jobid", Editejob_1.Editejob);
// quizz router
router.post("/quizz/create", CreateQuizz_1.CreateQuizz);
router.put("/quizz/editquizz/:quizzID", EditQuizz_1.EditQuizz);
// choise router
router.put("/choise/editchoise/:choiesID", EditChoies_1.EditChoies);
exports.default = router;
