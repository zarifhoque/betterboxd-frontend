import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { LoginFormHeader } from "./LoginFormHeader";
import { LoginFormContent } from "./LoginFormContent";
import { LoginFormFooter } from "./LoginFormFooter";
import { useAuth } from "@/contexts/auth/UseAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      toast.success("Welcome back!", {
        description: "You have successfully logged in.",
      });

      navigate("/home", { replace: true });
      // navigate("/home");
    } catch (err: any) {
      const rawMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      let displayMessage = rawMessage;

      if (rawMessage.includes("email:")) {
        displayMessage = rawMessage.split("email:")[1].split(",")[0].trim();
      } else if (rawMessage.includes("password:")) {
        displayMessage = rawMessage.split("password:")[1].split(",")[0].trim();
      }

      setError(displayMessage);
      toast.error("Login failed", { description: displayMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-border/50 shadow-soft animate-fade-in ">
      <LoginFormHeader />

      <form noValidate onSubmit={handleSubmit}>
        <LoginFormContent
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <LoginFormFooter isLoading={isLoading} />
      </form>
    </Card>
  );
};
