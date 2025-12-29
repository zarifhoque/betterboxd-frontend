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

export type User = LoginResponse["user"];
