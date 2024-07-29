import express from "express";
import V1Routes from "./v1/index";
const router = express.Router();

router.use("/v1", V1Routes);

export default router;
