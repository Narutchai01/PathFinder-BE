import { Response, Request } from "express";
import { client } from "../../server";
import { comparePassword } from "../../utils/PasswordManager";
export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const db = client.db("pathFinder");
    const user = db.collection("user");
    const findUser = await user.findOne({ email : email });
    if (!findUser) {
      res.status(404).json({ message: "User not found!" });
      return;
    }
    const isPasswordMatch = await comparePassword(password, findUser.password);
    if (!isPasswordMatch) {
      res.status(400).json({ message: "Invalid password!" });
      return;
    }
    res.status(200).json({ message: "Successfully!" });
  } catch (error) {
    console.log(error);
  }
};
