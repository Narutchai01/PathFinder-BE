"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RegisterController_1 = require("../Controller/User/\u0E4Auser/RegisterController");
const LoginUserController_1 = require("../Controller/User/\u0E4Auser/LoginUserController");
const Getuser_1 = require("../Controller/User/\u0E4Auser/Getuser");
const GetQuizz_1 = require("../Controller/User/Quizz/GetQuizz");
const CreatePost_1 = require("../Controller/User/Post/CreatePost");
const CreateComment_1 = require("../Controller/User/Post/CreateComment");
const GetPost_1 = require("../Controller/User/Post/GetPost");
const GetPostByPostID_1 = require("../Controller/User/Post/GetPostByPostID");
const DeleletPost_1 = require("../Controller/User/Post/DeleletPost");
const DeleletComment_1 = require("../Controller/User/Post/DeleletComment");
const auth_1 = require("../middleware/auth");
const LogOut_1 = require("../Controller/User/\u0E4Auser/LogOut");
const Predict_1 = require("../Controller/User/Quizz/Predict");
const GetResultPrediction_1 = require("../Controller/User/Quizz/GetResultPrediction");
const GetResultPredictionByUserID_1 = require("../Controller/User/Quizz/GetResultPredictionByUserID");
const GetUserByUserID_1 = require("../Controller/User/\u0E4Auser/GetUserByUserID");
const ForgetpasswordSendEmail_1 = require("../Controller/User/\u0E4Auser/ForgetpasswordSendEmail");
const VerifyOTP_1 = require("../Controller/User/\u0E4Auser/VerifyOTP");
const ChagePassWordByForgetpassword_1 = require("../Controller/User/\u0E4Auser/ChagePassWordByForgetpassword");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register", auth_1.isLogin, RegisterController_1.registerController);
router.post("/login", LoginUserController_1.LoginUserController);
router.post("/logout", LogOut_1.LogOut);
router.get("/getuser", auth_1.validateToken, Getuser_1.getUser);
router.get("/getuserbyid", GetUserByUserID_1.getUserByUserID);
router.post("/sendemail", ForgetpasswordSendEmail_1.forgetPasswordSendEmail);
router.post("/verifyotp", VerifyOTP_1.VerifyOTP);
router.put("/changepassword", ChagePassWordByForgetpassword_1.ChagePassWordByForgetpassword);
// Post Router
router.post("/post/createpost", CreatePost_1.CreatePost);
router.post("/post/createcomment", CreateComment_1.CreateComment);
router.get("/post/getpost", GetPost_1.GetPost);
router.get("/post/getpostbyid", GetPostByPostID_1.GetPostByPostID);
router.delete("/post/deletepost", DeleletPost_1.DeleletPost);
router.delete("/post/deletecomment", DeleletComment_1.DeleletComment);
// Quizz Router
router.get("/quizz/getquizz", GetQuizz_1.GetQuizz);
router.post("/quizz/predict", Predict_1.Predict);
router.get("/quizz/getresult/:reusult_id", GetResultPrediction_1.GetResultPrediction);
router.get("/quizz/getresultByUserID", GetResultPredictionByUserID_1.GetResultPredictionByUserID);
exports.default = router;
