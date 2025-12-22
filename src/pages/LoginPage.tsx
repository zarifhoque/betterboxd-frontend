import React from "react";
import { LoginForm } from "@/components/LoginForm";

const handleLogin = async (data: any) => {
    console.log("Login data:", data);
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-background to-secondary/50 p-4 w-full">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}
