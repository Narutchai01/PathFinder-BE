import { Response,Request } from "express";
import {client} from "../../server";
import { uuid } from "uuidv4";
import { hashPassword } from "../../utils/PasswordManager";

export const registerController = async (req:Request, res:Response) => {
    try {
        const { username , password ,firstname , lastname ,school , education_level ,birthdate , email} = req.body;
        const db = client.db("pathFinder");
        const user = db.collection("user");
        const registerData = {
            userID : uuid(),
            username,
            password : await hashPassword(password),
            email ,
            firstname,
            lastname,
            school,
            education_level,
            birthdate,
        }
        await user.insertOne(registerData);
        res.status(200).json({message:"Successfully!"});
    } catch (error) {
        console.log(error);
    }
};