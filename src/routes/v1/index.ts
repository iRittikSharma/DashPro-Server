import express from "express";
import {
  userTasks,
  createTask,
  updateTask,
} from "../../controllers/taskController";
import { signup, login, userDetail } from "../../controllers/userController";
import { authenticateToken } from "../../middlewares/auth-req-validator";
const router = express.Router();

router.get("/tasks", userTasks); // we need to setup the authention here

router.post("/getUserDetails", authenticateToken, userDetail);

router.post("/addTask", authenticateToken, createTask);
router.put("/updateTask", authenticateToken, updateTask);

//user router
router.post("/signUp", signup);
router.post("/logIn", login);

export default router;
