import express from 'express';
import { loginUserController } from '../Controller/User/LoginUserController';

const router = express.Router();


router.get("/login", loginUserController);




export default router;