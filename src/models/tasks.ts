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
      require: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "Urgent"],
      require: true,
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
