import React from "react";
import { LoginForm } from "@/components/LoginPage/LoginForm";
import LoginIllustration from "@/components/LoginPage/LoginIllustration";

export default function LoginPage() {
  return (
    <div className="min-h-[calc(80vh-8rem)] flex ">
      <LoginIllustration />
      <LoginForm />
    </div>
  );
}
