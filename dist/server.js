"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import zone
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const userRouter_1 = __importDefault(require("./Routers/userRouter"));
//define variable 
const app = (0, express_1.default)();
//use zone
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
//Router zone
app.use("/api/user", userRouter_1.default);
app.listen(config_1.PORT, () => {
    console.log(`Server is running at http://localhost:${config_1.PORT}`);
});
