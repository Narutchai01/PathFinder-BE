import { Request, Response } from "express";
import { sendEmail } from "../../../utils/SendEmail";
import { randomMath } from "../../../utils/RanDommath";
import { RecoveryModel } from "../../../Model/UserSchema";


export const forgetPasswordSendEmail = async (req: Request, res: Response) => {
  try {
    const { emailUser } = req.body;

    const OTP = `${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}${randomMath(0,9)}`


    const recovery = new RecoveryModel({
      OTP
    });
    const sendemail = await sendEmail(emailUser, OTP);
    if (sendemail) {
      await recovery.save();
      res.status(200).json({ message: "Email sent" });
    } else {
      res.status(400).json({ message: "Email not sent" });
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
