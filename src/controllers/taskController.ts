import { Request, Response } from "express";
import { ITask } from "../types/task";
import TaskService from "../services/TaskService";

const taskService = new TaskService();

/// function to create a tesk
export const createTask = async (req: Request, res: Response) => {
  try {
    const taskData: ITask = req.body as ITask;
    console.log("something", taskData);
    const response = await taskService.createTask(taskData);

    res.status(201).json({
      sucess: true,
      message: "Sucessfully created the Task",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "something went wrong",
      data: {},
      err: error,
    });
  }
};

// controler to get user Tasks
export const userTasks = async (req: Request, res: Response) => {
  try {
    const userId: string = req.query.id as string;
    console.log(userId);

    const response = await taskService.getUserTasks(userId);
    console.log(response);

    return res.status(201).json({
      sucess: true,
      message: "Sucessfully fetched the tasks of User",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "something went wrong",
      data: {},
      err: error,
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const id: string = req.query.id as string;
    const data = req.body;
    delete data.userId;
    console.log(data);
    const isUpdated = await taskService.updateData(id, data);

    res.status(200).json({
      sucess: true,
      message: "Sucessfully updated the tasks of User",
      data: isUpdated,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "something went wrong",
      data: {},
      err: error,
    });
  }
};
