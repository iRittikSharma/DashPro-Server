"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../repository/UserRepository"));
class UserService {
    constructor() {
        this.userRepository = new UserRepository_1.default();
    }
    signup(email, password, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.userRepository.findByEmail(email);
            if (existingUser) {
                throw new Error("User already exists");
            }
            const newUser = yield this.userRepository.create({ email, password, name });
            return newUser.genJWT();
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findByEmail(email);
            if (!user || !user.comparePassword(password)) {
                throw new Error("Invalid credentials");
            }
            return user.genJWT();
        });
    }
    findByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findByID(id);
        });
    }
}
exports.default = UserService;
