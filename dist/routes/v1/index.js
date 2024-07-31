"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../../controllers/taskController");
const userController_1 = require("../../controllers/userController");
const auth_req_validator_1 = require("../../middlewares/auth-req-validator");
const router = express_1.default.Router();
router.get("/tasks", taskController_1.userTasks); // we need to setup the authention here
router.post("/getUserDetails", auth_req_validator_1.authenticateToken, userController_1.userDetail);
router.post("/addTask", auth_req_validator_1.authenticateToken, taskController_1.createTask);
//user router
router.post("/signUp", userController_1.signup);
router.post("/logIn", userController_1.login);
exports.default = router;
