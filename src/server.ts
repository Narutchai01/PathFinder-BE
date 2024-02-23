//import zone
import express from "express";
import cors from "cors";
import { PORT } from "./config/config";
import userRouter from "./Routers/userRouter";




//define variable 
const app = express();


//use zone
app.use(cors());
app.use(express.json());


//Router zone
app.use("/api/user", userRouter);



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
