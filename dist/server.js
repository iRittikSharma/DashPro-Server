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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const ServerConfig_1 = require("./config/ServerConfig");
const database_1 = require("./config/database");
const index_js_1 = __importDefault(require("./routes/index.js"));
const app = (0, express_1.default)();
const setupAndStartServer = () => {
    // const corsOptions = {
    //   origin: "http://localhost:3000", // Allow only this origin
    //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    //   credentials: true, // Enable set cookie
    //   allowedHeaders: "Content-Type,Authorization",
    // };
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use("/api", index_js_1.default);
    app.get("/test", (req, res) => {
        res.send("testing is working properly");
    });
    app.listen(ServerConfig_1.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`server started at port : ${ServerConfig_1.PORT}`);
        yield (0, database_1.connect)();
    }));
};
setupAndStartServer();
