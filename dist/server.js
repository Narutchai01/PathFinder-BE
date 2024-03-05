"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
//import zone
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const userRouter_1 = __importDefault(require("./Routers/userRouter"));
const mongodb_1 = require("mongodb");
//define variable 
const app = (0, express_1.default)();
exports.client = new mongodb_1.MongoClient("mongodb://admin:password@localhost:27017/");
//use zone
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.client.connect;
    const results = yield exports.client.db("pathFinder").collection("user").findOne({});
    res.send(results);
}));
//Router zone
app.use("/api/user", userRouter_1.default);
app.listen(config_1.PORT, () => {
    console.log(`Server is running at http://localhost:${config_1.PORT}`);
});
