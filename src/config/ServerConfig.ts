import dotenv from "dotenv";

dotenv.config();
if (!process.env.DB_URL) {
  throw new Error("DB_URL is not defined in the environment variables");
}

export const PORT = process.env.PORT;
export const DB_URL: string = process.env.DB_URL;
