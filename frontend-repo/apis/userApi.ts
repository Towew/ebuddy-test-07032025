// apis/userApi.ts
import { User } from "./user";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001"; // URL emulator Firebase Functions

export async function fetchUser(userId: string): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/fetchUserData?id=${userId}`);
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return await response.json();
}

export async function updateUser(user: User): Promise<{
    message: string
}> {
  const response = await fetch(`${API_BASE_URL}/updateUserData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  if (!response.ok) {
    throw new Error("Error updating user");
  }
  return await response.json();
}
