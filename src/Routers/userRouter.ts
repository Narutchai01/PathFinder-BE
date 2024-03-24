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
import { validateToken } from '../middleware/auth';
import { LogOut } from '../Controller/User/๊user/LogOut';
import { Predict } from '../Controller/User/Quizz/Predict';

const router = express.Router();



router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register",registerController);
router.post("/login",LoginUserController);
router.get("/logout", LogOut);
router.get("/getuser", validateToken,getUser);

// Post Router
router.post("/post/createpost", CreatePost);
router.post("/post/createcomment", CreateComment);
router.get("/post/getpost", GetPost)
router.get("/post/getpostbyid", GetPostByPostID)
router.delete("/post/deletepost", DeleletPost)
router.delete("/post/deletecomment", DeleletComment)


// Quizz Router
router.get("/quizz/getquizz", GetQuizz);
router.post("/quizz/predict",Predict);



export default router;