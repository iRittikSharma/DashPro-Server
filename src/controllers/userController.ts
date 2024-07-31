import { Request, Response } from "express";

import UserService from "../services/UserService";
import { IUser } from "../types/user";

const userService = new UserService();

export async function signup(req: Request, res: Response) {
  try {
    console.log("kk", req.body);

    const user: IUser = req.body;
    console.log(user);

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
  const { email, password } = req.body;
  console.log(email, password);

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

export async function userDetail(req: Request, res: Response) {
  try {
    // we came here from the auth middleware
    const user: any = req.body;
    console.log("rittik", user);
    const data = await userService.findByID(user.userId);
    console.log(data);

    // const data = { userId: user.id, name: user.name };
    return res.status(201).json({
      sucess: true,
      message: "Sucessfully fetched the tasks of User",
      data: data,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: "something went wrong!!!",
      data: {},
      err: error,
    });
  }
}
