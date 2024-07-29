import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../types/user";

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// Encrypting the password before saving it to the DB
userSchema.pre<IUser>("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

//comparing the passwords
userSchema.methods.comparePassword = function compare(
  password: string
): boolean {
  return bcrypt.compareSync(password, this.password);
};

// functionn for generating the JWT token
userSchema.methods.genJWT = function generate(): String {
  return jwt.sign({ id: this.id, email: this.email }, "Project_secret", {
    expiresIn: "1h",
  });
};

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default User;
