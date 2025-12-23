import type { LoginResponse } from "@/types/Auth";

export const getUser = async (): Promise<LoginResponse["user"]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const res = await fetch("http://localhost:3000/api/v1/users/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to fetch user profile");
  }

  return res.json();
};
