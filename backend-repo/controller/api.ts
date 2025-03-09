import { Request, Response } from "express";
import { User } from "../entities/user";
import { updateUserData, fetchUserData } from "../repository/userCollection";

export const updateUserDataController = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    await updateUserData(user);
    res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user data" });
  }
};

export const fetchUserDataController = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "User id is required" });
    }
    const user = await fetchUserData(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch user data" });
  }
};
