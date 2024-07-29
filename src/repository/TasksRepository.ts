import { promises } from "dns";
import Tasks from "../models/tasks";
import { ITask } from "../types/task";

class TasksRepository {
  async createTask(data: Partial<ITask>): Promise<ITask> {
    const createdTask = await Tasks.create(data);
    return createdTask;
  }

  async getUserTasks(id: string): Promise<ITask[]> {
    const tasks = await Tasks.find({ userId: id });
    return tasks;
  }
}

export default TasksRepository;
