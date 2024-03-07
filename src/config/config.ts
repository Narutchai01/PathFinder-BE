import dotenv from 'dotenv';

dotenv.config();

export const PORT:number= Number(process.env.PORT) || 3000;
export const MONGO_URI:string= process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/kmutt?authSource=admin';
