import express from 'express';
import { registerController } from '../Controller/User/RegisterController';

const router = express.Router();


// router.get("/login", loginUserController);

router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});
router.post("/register",registerController);




export default router;