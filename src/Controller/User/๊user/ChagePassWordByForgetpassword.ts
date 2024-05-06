import { Request, Response } from "express";
import { UserModel } from "../../../Model/UserSchema";
import { hashPassword } from "../../../utils/PasswordManager";

export const ChagePassWordByForgetpassword = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;
    const finduser = await UserModel.findOne({
      email,
    });

    if (!finduser) {
      return res.status(400).json({ message: "User not found" });
    }

    const hash = await hashPassword(password);

    await UserModel.updateOne(
      { email },
      {
        password: hash,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
