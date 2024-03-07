//import zone
import express from "express";
import cors from "cors";
import { PORT, MONGO_URI } from "./config/config";
import userRouter from "./Routers/userRouter";
import adminRouter from "./Routers/adminRouter";
import mongoose from "mongoose";

//define variable
const app = express();

//use zone
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send({
    message: "Hello World",
  });
});

//Router zone
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error: any) {
    console.log("Error on server", error.message);
  }
});
