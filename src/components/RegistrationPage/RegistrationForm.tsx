import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { signupUser } from "@/api/AuthAPI";
import { Card } from "@/components/ui/card";
import { RegistrationFormHeader } from "./RegistrationFormHeader";
import { RegistrationFormContent } from "./RegistrationFormContent";
import { RegistrationFormFooter } from "./RegistrationFormFooter";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Registration failed", {
        description: "Passwords do not match",
      });
      setIsLoading(false);
      return;
    }

    try {
      await signupUser({ name, username, email, password });
      toast.success("Account created", {
        description: "Please confirm your email.",
      });
      navigate("/home", { replace: true });
    } catch (err: any) {
      const rawMessage =
        err instanceof Error ? err.message : "Something went wrong";
      let displayMessage = rawMessage;
      if (rawMessage.includes("email:"))
        displayMessage = rawMessage.split("email:")[1].split(",")[0].trim();
      else if (rawMessage.includes("username:"))
        displayMessage = rawMessage.split("username:")[1].split(",")[0].trim();
      else if (rawMessage.includes("password:"))
        displayMessage = rawMessage.split("password:")[1].split(",")[0].trim();

      setError(displayMessage);
      toast.error("Registration failed", { description: displayMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-border/50 shadow-soft animate-fade-in">
      <RegistrationFormHeader />
      <form noValidate onSubmit={onSubmit}>
        <RegistrationFormContent
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          error={error}
        />
        <RegistrationFormFooter isLoading={isLoading} />
      </form>
    </Card>
  );
};
