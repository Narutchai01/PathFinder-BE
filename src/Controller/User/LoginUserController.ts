import { Response, Request } from "express";

export const loginUserController = async (req: Request, res: Response) => {
  try {
    res.send("Login User");
  } catch (error) {
    console.log(error);
  }
};
