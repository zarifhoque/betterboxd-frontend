import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const handleLogin = async (data: {
  email: string;
  password: string;
}) => {
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
  localStorage.setItem("token", json.data.token);
  return json;
};
