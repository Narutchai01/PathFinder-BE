import express from 'express';
import { registerController } from '../Controller/User/RegisterController';
import { LoginUserController} from '../Controller/User/LoginUserController';
import { getUser } from '../Controller/User/Getuser';

const router = express.Router();



router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register",registerController);
router.post("/login",LoginUserController);
router.get("/getuser", getUser);




export default router;