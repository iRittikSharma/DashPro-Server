"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ServerConfig_1 = require("../config/ServerConfig");
const userSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
// Encrypting the password before saving it to the DB
userSchema.pre("save", function (next) {
    const user = this;
    const SALT = bcrypt_1.default.genSaltSync(10);
    const encryptedPassword = bcrypt_1.default.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});
//comparing the passwords
userSchema.methods.comparePassword = function compare(password) {
    return bcrypt_1.default.compareSync(password, this.password);
};
// functionn for generating the JWT token
userSchema.methods.genJWT = function generate() {
    const token = jsonwebtoken_1.default.sign({ id: this.id, email: this.email }, ServerConfig_1.JWT_KEY, {
        expiresIn: "1h",
    });
    return { token, id: this.id, name: this.name, email: this.email };
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
