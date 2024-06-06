import { Request, Response } from "express";
import { UserModel } from "../../../Model/UserSchema";
import { hashPassword } from "../../../utils/PasswordManager";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";

export const registerController = async (req: Request, res: Response) => {
  try {
    const {
      username,
      password,
      email,
      firstname,
      lastname,
      school,
      education_level,
      birhDate,
    } = req.body;
    const user = new UserModel({
      username,
      password: await hashPassword(password),
      email,
      firstname,
      lastname,
      school,
      education_level,
      birhDate,
    });
    await user.save();


    const playload = jwt.sign({UserID : user._id},String(secret_jwt),{algorithm : "HS256"});
    res.cookie("token",playload,{httpOnly : true});
    res.status(200).send({
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    console.log("Error on registerController", error.message);
  }
};
