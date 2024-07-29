import express from "express";
import { PORT } from "./config/ServerConfig";
const app = express();

const setupAndStartServer = () => {
  app.get("/home", async (req, res) => {
    return res.status(200).json({
      data: "succesfully completed the server",
    });
  });
  app.listen(PORT, async () => {
    console.log(`server started at port : ${PORT}`);
  });
};

setupAndStartServer();
