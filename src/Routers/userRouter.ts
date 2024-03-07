import express from 'express';
import { registerController } from '../Controller/User/RegisterController';
import { LoginUserController} from '../Controller/User/LoginUserController';

const router = express.Router();


// router.get("/login", loginUserController);

router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register",registerController);
router.post("/login",LoginUserController);




export default router;