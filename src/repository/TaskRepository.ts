import Tasks from "../models/tasks";
import { ITask } from "../types/task";

class TaskRepository {
  async createTask(data: Partial<ITask>): Promise<ITask> {
    try {
      const createdTask = await Tasks.create(data);
      return createdTask;
    } catch (error) {
      throw error;
    }
  }

  async getUserTasks(id: string): Promise<ITask[]> {
    try {
      const tasks = await Tasks.find({ userId: id });
      return tasks;
    } catch (error) {
      throw error;
    }
  }

  async updateData(id: string, data: Partial<ITask>): Promise<Boolean> {
    try {
      console.log(id, data);
      const updatedTask = await Tasks.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
      if (!updatedTask) {
        throw new Error("Triying to update the invalid field");
      }
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default TaskRepository;
