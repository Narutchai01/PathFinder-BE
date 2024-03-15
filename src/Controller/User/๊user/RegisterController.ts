import { Request, Response } from "express";
import { UserModel } from "../../../Model/UserSchema";
import { hashPassword } from "../../../utils/PasswordManager";

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
    res.status(200).send({
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    console.log("Error on registerController", error.message);
  }
};
