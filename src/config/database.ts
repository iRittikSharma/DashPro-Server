import mongoose from "mongoose";
import { DB_URL } from "./ServerConfig";
export const connect = async () => {
  await mongoose.connect(DB_URL);
  console.log("db connecter succesfully");
};
