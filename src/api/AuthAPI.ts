import type { LoginData, LoginResponse } from "@/types/Auth";

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const res = await fetch("http://localhost:3000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message || "Login failed");
  }

  const json = await res.json();
  return json.data;
};
