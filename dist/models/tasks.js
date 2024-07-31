"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const tasksSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ["todo", "inProgress", "underReview", "finished"],
        required: true,
    },
    priority: {
        type: String,
        enum: ["Low", "Medium", "Urgent"],
    },
    deadline: {
        type: String,
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
}, { timestamps: true });
const Tasks = mongoose_1.default.model("Tasks", tasksSchema);
exports.default = Tasks;
