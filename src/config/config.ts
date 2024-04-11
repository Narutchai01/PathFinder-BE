import dotenv from 'dotenv';

dotenv.config();

export const PORT:number= Number(process.env.PORT) || 3000;
export const MONGO_URI = String(process.env.MONGO_URI) ;
export const secret_jwt = process.env.JWT_SECERT ;
export const supabaseUrl = String(process.env.SUPABASE_URL) ;
export const supabaseKey = String(process.env.SUPABASE_KEY) ;