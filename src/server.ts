//import zone
import express from "express";
import cors from "cors";
import { PORT } from "./config/config";
import userRouter from "./Routers/userRouter";
import { MongoClient } from "mongodb";




//define variable 
const app = express();
export const client = new MongoClient("mongodb://admin:password@localhost:27017/")

//use zone
app.use(cors());
app.use(express.json());




app.get("/", async (req, res) => {
    await client.connect
    const results = await client.db("pathFinder").collection("user").findOne({})
    res.send(results)
});

//Router zone
app.use("/api/user", userRouter);




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
