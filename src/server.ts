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
import multer from "multer";

//define variable
const app = express();
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));


app.use(function(_, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(cookieParser());
app.use(express.json());

const multerMid = multer({
  storage: multer.memoryStorage(),
});

app.use(multerMid.single("file"));

app.get("/", async (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//Router zone
app.use("/api/user", userRouter);
app.use("/api/admin",adminRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error: any) {
    console.log("server error");
  }
});
