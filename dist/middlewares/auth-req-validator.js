"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ServerConfig_1 = require("../config/ServerConfig");
// Define the middleware function
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log("something", authHeader);
    const token = authHeader && authHeader.split(" ")[1]; // Extract token from Bearer header
    if (token == null)
        return res.sendStatus(500); // No token, unauthorized
    jsonwebtoken_1.default.verify(token, ServerConfig_1.JWT_KEY, (err, user) => {
        if (err)
            return res.status(201).json({
                success: false,
                message: "session expired",
                data: false,
                err: "your token is expired",
            }); // Invalid token, forbidden
        if (!req.body) {
            req.body = Object.assign(Object.assign({}, req.body), { user: user });
            console.log("hi", req.body);
        }
        else {
            req.body = Object.assign(Object.assign({}, req.body), { userId: user.id });
        }
        next(); // Proceed to the next middleware or route handler
    });
};
exports.authenticateToken = authenticateToken;
