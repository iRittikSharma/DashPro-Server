import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT } from "./config/ServerConfig";
import { connect } from "./config/database";
import ApiRoutes from "./routes/index.js";
const app = express();

const setupAndStartServer = () => {
  const corsOptions = {
    origin: "http://localhost:3000", // Allow only this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable set cookie
    allowedHeaders: "Content-Type,Authorization",
  };
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`server started at port : ${PORT}`);
    await connect();
  });
};

setupAndStartServer();
