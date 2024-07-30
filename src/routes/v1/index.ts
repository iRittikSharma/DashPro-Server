import express from "express";
import { userTasks, createTask } from "../../controllers/taskController";
import { signup, login } from "../../controllers/userController";
import { authenticateToken } from "../../middlewares/auth-req-validator";
const router = express.Router();

router.get("/tasks", userTasks); // we need to setup the authention here

router.post("/addTask", authenticateToken, createTask);

//user router
router.post("/signUp", signup);
router.post("/logIn", login);

export default router;
