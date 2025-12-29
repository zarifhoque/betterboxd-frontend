import type {
  LoginData,
  LoginResponse,
  SignupData,
  SignupResponse,
} from "@/types/Auth";

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

export const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  const res = await fetch("http://localhost:3000/api/v1/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message || "Signup failed");
  }

  const json = await res.json();
  return json.data;
};

export const confirmEmailApi = async (token: string): Promise<void> => {
  const res = await fetch(
    `http://localhost:3000/api/v1/auth/confirm-email/${token}`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Confirmation failed");
  }
};
