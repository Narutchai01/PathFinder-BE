import { ObjectId } from "mongoose";


export interface UserInterface {
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    school?: string;
    education_level?: string;
    birhDate?: Date;
}

export interface JobInterface {
    jobTitle: string;
}

export interface QuizzInterface {
    quizzTitle: string;
    choies: string[];
}

export interface ChoiseInterface {
    answer: string;
    weight: string[];
}

export interface WeightInterface {
    jobID: ObjectId;
    choiseID: ObjectId;
    weight: number;
}