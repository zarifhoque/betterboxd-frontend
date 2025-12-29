export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    userId: string;
    username: string;
    email: string;
    role: string;
  };
}

export interface SignupData {
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  userId: string;
  username: string;
  name: string;
  email: string;
  bio: string | null;
  joinDate: string;
  role: "USER" | "ADMIN";
}
