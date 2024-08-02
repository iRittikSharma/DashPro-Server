import { Document } from "mongoose";

export interface ITask extends Document {
  title?: string;
  description?: string;
  deadline?: string;
  status?: "todo" | "inProgress" | "underReview" | "finished";
  priority?: "Low" | "Medium" | "Urgent";
  userId?: mongoose.Types.ObjectId;
}
