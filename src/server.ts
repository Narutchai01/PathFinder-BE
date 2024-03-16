//import zone
import express from "express";
import cors from "cors";
import { PORT, MONGO_URI } from "./config/config";
import userRouter from "./Routers/userRouter";
import adminRouter from "./Routers/adminRouter";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import cookieParser from "cookie-parser";

//define variable
const app = express();
app.use(cors(
  {
    origin: '*',
    credentials: true,
  }
));
app.use(cookieParser());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//Router zone
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions);
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error: any) {
    console.log("server error");
  }
});
