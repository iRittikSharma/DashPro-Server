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
exports.updateTask = exports.userTasks = exports.createTask = void 0;
const TaskService_1 = __importDefault(require("../services/TaskService"));
const taskService = new TaskService_1.default();
/// function to create a tesk
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskData = req.body;
        console.log("something", taskData);
        const response = yield taskService.createTask(taskData);
        res.status(201).json({
            sucess: true,
            message: "Sucessfully created the Task",
            data: response,
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
exports.createTask = createTask;
// controler to get user Tasks
const userTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.id;
        console.log(userId);
        const response = yield taskService.getUserTasks(userId);
        console.log(response);
        return res.status(201).json({
            sucess: true,
            message: "Sucessfully fetched the tasks of User",
            data: response,
            err: {},
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "something went wrong",
            data: {},
            err: error,
        });
    }
});
exports.userTasks = userTasks;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const data = req.body;
        delete data.userId;
        console.log(data);
        const isUpdated = yield taskService.updateData(id, data);
        res.status(200).json({
            sucess: true,
            message: "Sucessfully updated the tasks of User",
            data: isUpdated,
            err: {},
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "something went wrong",
            data: {},
            err: error,
        });
    }
});
exports.updateTask = updateTask;
