import { Schema ,model} from "mongoose";
import { UserInterface } from "../interface/Model";


const User = new Schema<UserInterface>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    school : String,
    education_level : String,
    birhDate : Date,
});

export const UserModel = model<UserInterface>("User", User);