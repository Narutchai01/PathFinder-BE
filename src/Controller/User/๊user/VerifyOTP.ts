import { RecoveryModel } from "../../../Model/UserSchema";
import { Request, Response } from "express";
import dayjs from "dayjs";

export const VerifyOTP = async (req: Request, res: Response) => {
  try {
    const { OTP } = req.body;

    const verifyOTP = await RecoveryModel.findOne({ OTP: OTP })
      .where("dateCreate")
      .gte(Number(dayjs().subtract(5, "minute").toDate()))
      .exec();

    if (!verifyOTP) {
      return res.status(400).json({ message: "OTP is invalid or expired" });
    }
    res.status(200).json({ message: "OTP is valid" });
  } catch (error) {
    console.log(error);
  }
};
