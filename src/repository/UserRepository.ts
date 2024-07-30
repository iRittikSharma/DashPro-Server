import User from "../models/user";
import { IUser } from "../types/user";

class UserRepository {
  async create(data: Partial<IUser>): Promise<IUser> {
    const createdUser = await User.create(data);
    return createdUser;
  }

  async getAll(): Promise<IUser[]> {
    const users = await User.find({});
    return users;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }
}

export default UserRepository;
