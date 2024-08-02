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
const TaskRepository_1 = __importDefault(require("../repository/TaskRepository"));
class TaskService {
    constructor() {
        this.taskRepository = new TaskRepository_1.default();
    }
    createTask(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.taskRepository.createTask(data);
                return response;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error in service while creating task: ${error.message}`);
                }
                else {
                    throw new Error("Unknown error occurred in service while creating task");
                }
            }
        });
    }
    // function to fetcch the tasks of particular user
    getUserTasks(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.taskRepository.getUserTasks(id);
                return tasks;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error in service while creating task: ${error.message}`);
                }
                else {
                    throw new Error("Unknown error occurred in service while Fetching task");
                }
            }
        });
    }
    updateData(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isUpdated = yield this.taskRepository.updateData(id, data);
                return isUpdated;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = TaskService;
