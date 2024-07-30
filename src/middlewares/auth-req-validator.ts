import { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { JWT_KEY } from "../config/ServerConfig";
import { IUser } from "../types/user";

// Define the interface for user information stored in JWT
interface UserPayload {
  id: string;
  username: string;
}

// Extend the Request interface to include user info
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

// Define the middleware function
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from Bearer header

  if (token == null) return res.sendStatus(401); // No token, unauthorized

  jwt.verify(token, JWT_KEY, (err: VerifyErrors | null, user: any) => {
    if (err) return res.sendStatus(403); // Invalid token, forbidden
    req.body = { ...req.body, userId: user.id };
    next(); // Proceed to the next middleware or route handler
  });
};
