import express from 'express';
import { loginUserController } from '../Controller/User/LoginUserController';
import { registerController } from '../Controller/User/RegisterController';

const router = express.Router();


router.get("/login", loginUserController);
router.get("/register",registerController);




export default router;