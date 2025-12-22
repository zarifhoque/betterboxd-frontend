import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const handleLogin = async (data: {
  email: string;
  password: string;
}) => {
  const navigate = useNavigate();
  try {
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
    console.log("Login success:", json);

    // Example: save token
    localStorage.setItem("token", json.token);
    // Redirect or update user state here
    toast.success("Welcome back!", {
      description: "You have successfully logged in.",
    });
  } catch (error: any) {
    toast.error("Login failed", { description: error.message });
    console.error("Login error:", error.message);
  }
};
