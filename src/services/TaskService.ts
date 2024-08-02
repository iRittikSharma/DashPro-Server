import TaskRepository from "../repository/TaskRepository";
import TasksRepository from "../repository/TaskRepository";
import { ITask } from "../types/task";

class TaskService {
  private taskRepository: TaskRepository;
  constructor() {
    this.taskRepository = new TasksRepository();
  }

  async createTask(data: Partial<ITask>): Promise<ITask> {
    try {
      const response = await this.taskRepository.createTask(data);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `Error in service while creating task: ${error.message}`
        );
      } else {
        throw new Error(
          "Unknown error occurred in service while creating task"
        );
      }
    }
  }

  // function to fetcch the tasks of particular user
  async getUserTasks(id: string): Promise<ITask[]> {
    try {
      const tasks = await this.taskRepository.getUserTasks(id);
      return tasks;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `Error in service while creating task: ${error.message}`
        );
      } else {
        throw new Error(
          "Unknown error occurred in service while Fetching task"
        );
      }
    }
  }

  async updateData(id: string, data: Partial<ITask>): Promise<Boolean> {
    try {
      const isUpdated = await this.taskRepository.updateData(id, data);
      return isUpdated;
    } catch (error) {
      throw error;
    }
  }
}

export default TaskService;
