import React from "react";
import { LoginForm } from "@/components/LoginPage/LoginForm";
import LoginIllustration from "@/components/LoginPage/LoginIllustration";
import { Layout } from "@/components/Layout/Layout";

export default function LoginPage() {
  return (
    <Layout>
      <div className="min-h-[calc(80vh)] flex items-center justify-between gap-8">
        <div className="hidden lg:block flex-1">
          <LoginIllustration />
        </div>
        <div className="flex-1 ">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}
