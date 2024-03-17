import { Request, Response, NextFunction } from "express";

export const validateToken = (req:Request,res:Response,next:NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.json("You need to Login");
      return res.redirect("http://localhost:3000/Login");
    } 
    next();
  } catch (error: any) {
    console.log(error.message);
  }
};
