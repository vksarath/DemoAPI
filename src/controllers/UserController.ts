import { Request, Response } from 'express';
import UserModel from '../models/userModel';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body;
    const newUser = await UserModel.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Could not create user' });
  }
};


export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const deletedUser = await UserModel.delete(userId);
    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const userDataToUpdate = req.body;
    const updatedUser = await UserModel.update(userId, userDataToUpdate);
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await UserModel.getById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};