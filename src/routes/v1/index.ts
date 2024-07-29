import express from "express";
import { userTasks } from "../../controllers/taskController";
const router = express.Router();

router.get("/tasks", userTasks); // we need to setup the authention here

export default router;
