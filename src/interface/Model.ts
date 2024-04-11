import { ObjectId } from "mongoose";

interface SkillInterface {
    skill: string;
    descriptoionskill: string;
};
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
    description: string;
    OneDayDo : string[];
    skills: SkillInterface[];
    Image : string;

}

export interface QuizzInterface {
    quizzTitle: string;
    choies: string[];
    Image : string;
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

export interface PostInterface {
    PostTitle: string;
    OwnerID: ObjectId;
    Comments: ObjectId[];
    Image : string;
}

export interface CommentInterface {
    comment: string;
    PostID: ObjectId;
    OwnerID: ObjectId;
}

export interface PayLoadUser {
    UserID : string;
}

export interface ResultInterface {
    jobID: ObjectId;
    userID : ObjectId;
}