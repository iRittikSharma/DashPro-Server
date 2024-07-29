import { Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  priority: "Low" | "Medium" | "Urgent";
  userId: mongoose.Types.ObjectId;
}
