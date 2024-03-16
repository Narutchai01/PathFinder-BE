import express from 'express';
import { registerController } from '../Controller/User/๊user/RegisterController';
import { LoginUserController} from '../Controller/User/๊user/LoginUserController';
import { getUser } from '../Controller/User/๊user/Getuser';
import { GetQuizz } from '../Controller/User/Quizz/GetQuizz';
import { CreatePost } from '../Controller/User/Post/CreatePost';
import { CreateComment } from '../Controller/User/Post/CreateComment';
import { GetPost } from '../Controller/User/Post/GetPost';

const router = express.Router();



router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register",registerController);
router.post("/login",LoginUserController);
router.get("/getuser", getUser);
router.get("/quizz/getquizz", GetQuizz);

// Post Router
router.post("/post/createpost", CreatePost);
router.post("/post/createcomment", CreateComment);
router.get("/post/getpost", GetPost)



export default router;