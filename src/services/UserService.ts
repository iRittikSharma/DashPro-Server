import UserRepository from "../repository/UserRepository";

class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async signup(email: string, password: string, name: string): Promise<string> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const newUser = await this.userRepository.create({ email, password, name });

    return newUser.genJWT();
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !user.comparePassword(password)) {
      throw new Error("Invalid credentials");
    }
    return user.genJWT();
  }
}

export default UserService;
