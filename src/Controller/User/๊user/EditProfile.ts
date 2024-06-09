import { Request, Response } from "express";
import { UserModel } from "../../../Model/UserSchema";
import jwt from "jsonwebtoken";
import { secret_jwt } from "../../../config/config";

export const EditProfile = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const validToken = jwt.verify(token, String(secret_jwt));

    if (!validToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { firstname, lastname, username, email } = req.body;
    const OwnerID = (validToken as { UserID: any }).UserID;

    const userData = await UserModel.findById(OwnerID);

    await UserModel.findByIdAndUpdate(OwnerID, {
        firstname : firstname ? firstname : userData?.firstname,
        lastname : lastname ? lastname : userData?.lastname,
        username : username ? username : userData?.username,
        email : email ? email : userData?.email,
    });

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.log(error);
  }
};
