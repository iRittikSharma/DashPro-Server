"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_KEY = exports.DB_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.DB_URL) {
    throw new Error("DB_URL is not defined in the environment variables");
}
exports.PORT = process.env.PORT;
exports.DB_URL = process.env.DB_URL;
exports.JWT_KEY = process.env.JWT_KEY || "";
