import nodeemailer from "nodemailer";
import { eamil, password } from "../config/config";

export const sendEmail = async (emailUser: string, OTP: string) => {
  const transporter = nodeemailer.createTransport({
    service: "Gmail",
    auth: {
      user: eamil,
      pass: password,
    },
  });
  const mailOptions = {
    from: eamil,
    to: emailUser,
    subject: "Recover password",
    text: `Your OTP is ${OTP} is valid for 5 minutes.`,
  };
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return true;
};
