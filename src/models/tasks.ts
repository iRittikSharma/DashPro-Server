import mongoose, { Model, Schema } from "mongoose";
import { ITask } from "../types/task";

const tasksSchema: Schema<ITask> = new mongoose.Schema(
  {
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

const Tasks: Model<ITask> = mongoose.model<ITask>("Tasks", tasksSchema);
export default Tasks;
