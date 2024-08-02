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
const tasks_1 = __importDefault(require("../models/tasks"));
class TaskRepository {
    createTask(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdTask = yield tasks_1.default.create(data);
                return createdTask;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUserTasks(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield tasks_1.default.find({ userId: id });
                return tasks;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateData(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id, data);
                const updatedTask = yield tasks_1.default.findByIdAndUpdate(id, data, {
                    new: true,
                    runValidators: true,
                });
                if (!updatedTask) {
                    throw new Error("Triying to update the invalid field");
                }
                return true;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = TaskRepository;
