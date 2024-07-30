import { Request, Response } from "express";

import UserService from "../services/UserService";
import { IUser } from "../types/user";
import { log } from "console";

const userService = new UserService();

export async function signup(req: Request, res: Response) {
  try {
    const user: IUser = req.body;

    if (!user.email || !user.password || !user.name) {
      return res.status(500).json({
        sucess: false,
        message: "Username password and name are manadatory fields",
        data: {},
        err: {},
      });
    }

    const token = await userService.signup(
      user.email,
      user.password,
      user.name
    );
    return res.status(201).json({
      sucess: true,
      message: "Sucessfully fetched the tasks of User",
      data: token,
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
}

export async function login(req: Request, res: Response) {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }

  try {
    const token = await userService.login(email, password);
    return res.status(201).json({
      sucess: true,
      message: "Sucessfully fetched the tasks of User",
      data: token,
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
}
