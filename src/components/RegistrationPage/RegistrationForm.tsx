import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { signupUser } from "@/api/AuthAPI";
import { useAuth } from "@/contexts/auth/UseAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Loader2, ArrowRight } from "lucide-react";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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
      await signupUser({
        name,
        username,
        email,
        password,
      });

      toast.success("Account created", {
        description: "Please confirm your email to activate your account.",
      });

      navigate("/home", { replace: true });
    } catch (err: unknown) {
      const rawMessage =
        err instanceof Error ? err.message : "Something went wrong";

      let displayMessage = rawMessage;

      if (rawMessage.includes("email:")) {
        displayMessage = rawMessage.split("email:")[1].split(",")[0].trim();
      } else if (rawMessage.includes("username:")) {
        displayMessage = rawMessage.split("username:")[1].split(",")[0].trim();
      } else if (rawMessage.includes("password:")) {
        displayMessage = rawMessage.split("password:")[1].split(",")[0].trim();
      }

      setError(displayMessage);
      toast.error("Registration failed", { description: displayMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-border/50 shadow-soft animate-fade-in">
      <CardHeader className="text-center pb-2">
        <CardTitle className="font-display text-2xl">Create Account</CardTitle>
        <CardDescription>Join the BetterBoxd community</CardDescription>
      </CardHeader>

      <form noValidate onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              className="bg-secondary/30 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="cinephile123"
              onChange={(e) => setUsername(e.target.value)}
              className="bg-secondary/30 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/30 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-secondary/30 border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-secondary/30 border-border/50 focus:border-primary/50"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-10">
          <Button
            type="submit"
            className="w-full shadow-soft hover:shadow-glow transition-shadow "
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Create Account
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            {error && (
              <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {error}
              </p>
            )}
            <Link
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              Log in
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
