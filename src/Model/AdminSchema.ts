import mongoose, { Schema ,model} from "mongoose";
import { ChoiseInterface, JobInterface, QuizzInterface, WeightInterface } from "../interface/Model";



const Admin = new Schema({
    username: String,
    password: String
});

export const AdminModel = model("Admin", Admin);

const Job = new Schema<JobInterface>({
    jobTitle: String,
    description: String,
    OneDayDo : [String],
    skills: [
        {
            skill: String,
            descriptoionskill: String
        }
    ],
    Image : String
});

export const JobModel = model("Job", Job);


const Quizz = new Schema<QuizzInterface>({
    quizzTitle: String,
    choies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Choies"
    }],
});

export const QuizzModel = model("Quizz", Quizz);

const Choise = new Schema<ChoiseInterface>({
    
    answer: String,
    weight : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Weight"
        }
    ]
});

export const ChoiseModel = model("Choies", Choise);

const Weight = new Schema<WeightInterface>({
    jobID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },
    weight: Number
});

export const WeightModel = model("Weight", Weight);