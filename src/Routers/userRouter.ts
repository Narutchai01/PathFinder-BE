import express from 'express';
import { registerController } from '../Controller/User/๊user/RegisterController';
import { LoginUserController} from '../Controller/User/๊user/LoginUserController';
import { getUser } from '../Controller/User/๊user/Getuser';
import { GetQuizz } from '../Controller/User/Quizz/GetQuizz';
import { CreatePost } from '../Controller/User/Post/CreatePost';
import { CreateComment } from '../Controller/User/Post/CreateComment';
import { GetPost } from '../Controller/User/Post/GetPost';
import { GetPostByPostID } from '../Controller/User/Post/GetPostByPostID';
import { DeleletPost } from '../Controller/User/Post/DeleletPost';
import { DeleletComment } from '../Controller/User/Post/DeleletComment';
import { isLogin, validateToken } from '../middleware/auth';
import { LogOut } from '../Controller/User/๊user/LogOut';
import { Predict } from '../Controller/User/Quizz/Predict';
import { GetResultPrediction } from '../Controller/User/Quizz/GetResultPrediction';
import { GetResultPredictionByUserID } from '../Controller/User/Quizz/GetResultPredictionByUserID';
import { getUserByUserID } from '../Controller/User/๊user/GetUserByUserID';
import { forgetPasswordSendEmail } from '../Controller/User/๊user/ForgetpasswordSendEmail';
import { VerifyOTP } from '../Controller/User/๊user/VerifyOTP';
import { ChagePassWordByForgetpassword } from '../Controller/User/๊user/ChagePassWordByForgetpassword';
import { CheckOwner } from '../Controller/User/Post/CheckOwner';
import { UpdatePost } from '../Controller/User/Post/UpdatePost';
import { EditProfile } from '../Controller/User/๊user/EditProfile';

const router = express.Router();



router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register",registerController);
router.post("/login",LoginUserController);
router.post("/logout", LogOut);
router.get("/getuser", validateToken,getUser);
router.get("/getuserbyid",getUserByUserID);
router.post("/sendemail", forgetPasswordSendEmail);
router.post("/verifyotp", VerifyOTP);
router.put("/changepasswordbyopt", ChagePassWordByForgetpassword);
router.put("/editprofile", EditProfile);

// Post Router
router.post("/post/createpost", CreatePost);
router.post("/post/createcomment", CreateComment);
router.get("/post/getpost", GetPost)
router.get("/post/getpostbyid", GetPostByPostID)
router.delete("/post/deletepost", DeleletPost)
router.delete("/post/deletecomment", DeleletComment)
router.get("/post/checkowner/:postID", CheckOwner);
router.put("/post/updatepost/:Postid", UpdatePost);


// Quizz Router
router.get("/quizz/getquizz", GetQuizz);
router.post("/quizz/predict",Predict);
router.get("/quizz/getresult/:reusult_id",GetResultPrediction);
router.get("/quizz/getresultByUserID",GetResultPredictionByUserID)



export default router;