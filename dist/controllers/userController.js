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
exports.signup = signup;
exports.login = login;
exports.userDetail = userDetail;
const UserService_1 = __importDefault(require("../services/UserService"));
const userService = new UserService_1.default();
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("kk", req.body);
            const user = req.body;
            console.log(user);
            if (!user.email || !user.password || !user.name) {
                return res.status(500).json({
                    sucess: false,
                    message: "Username password and name are manadatory fields",
                    data: {},
                    err: {},
                });
            }
            const token = yield userService.signup(user.email, user.password, user.name);
            return res.status(201).json({
                sucess: true,
                message: "Sucessfully fetched the tasks of User",
                data: token,
                err: {},
            });
        }
        catch (error) {
            return res.status(500).json({
                sucess: false,
                message: "something went wrong",
                data: {},
                err: error,
            });
        }
    });
}
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        console.log(email, password);
        if (!email || !password) {
            res.status(400).json({ message: "Username and password are required" });
            return;
        }
        try {
            const token = yield userService.login(email, password);
            return res.status(201).json({
                sucess: true,
                message: "Sucessfully fetched the tasks of User",
                data: token,
                err: {},
            });
        }
        catch (error) {
            return res.status(500).json({
                sucess: false,
                message: "something went wrong",
                data: {},
                err: error,
            });
        }
    });
}
function userDetail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // we came here from the auth middleware
            const user = req.body;
            console.log("rittik", user);
            const data = yield userService.findByID(user.userId);
            console.log(data);
            // const data = { userId: user.id, name: user.name };
            return res.status(201).json({
                sucess: true,
                message: "Sucessfully fetched the tasks of User",
                data: data,
                err: {},
            });
        }
        catch (error) {
            return res.status(500).json({
                sucess: false,
                message: "something went wrong!!!",
                data: {},
                err: error,
            });
        }
    });
}
