import dotenv from 'dotenv';

dotenv.config();

export const PORT:number= Number(process.env.PORT) || 3000;
export const MONGO_URI ='mongodb://mongo_pathfinder:27017/kmutt?authSource=admin' || 'mongodb://localhost:27017/kmutt?authSource=admin' ;
