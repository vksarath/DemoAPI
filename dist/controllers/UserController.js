"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.updateUser = exports.deleteUser = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userModel_1.default.create(userData);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Could not create user' });
    }
};
exports.createUser = createUser;
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel_1.default.delete(userId);
        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
};
exports.deleteUser = deleteUser;
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userDataToUpdate = req.body;
        const updatedUser = await userModel_1.default.update(userId, userDataToUpdate);
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
};
exports.updateUser = updateUser;
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel_1.default.getById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
};
exports.getUserById = getUserById;
