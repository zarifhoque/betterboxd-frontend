import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, ArrowRight, Film, Eye, EyeOff } from "lucide-react";
import { handleLogin } from "@/api/Login";
import { toast } from "sonner";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await handleLogin({ email, password });
      toast.success("Welcome back!", {
        description: "You have successfully logged in.",
      });
      navigate("/", { replace: true });
    } catch (err: any) {
      const rawMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      let displayMessage = rawMessage;
      if (rawMessage.includes("email:")) {
        displayMessage = rawMessage.split("email:")[1].split(",")[0].trim();
      }
      if (rawMessage.includes("password:")) {
        displayMessage = rawMessage.split("password:")[1].split(",")[0].trim();
      }

      setError(displayMessage);
      toast.error("Login failed", { description: displayMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-border/50 shadow-soft animate-fade-in">
      <CardHeader className="text-center pb-2">
        <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
          <Film className="h-8 w-8 text-secondary" />
        </div>
        <CardTitle className="font-display text-2xl">Sign In</CardTitle>
        <CardDescription>Enter your credentials to continue</CardDescription>
      </CardHeader>

      <form noValidate onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Type your email here"
              className="bg-secondary/30 border-border/50 focus:border-primary/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Type your password here"
                className="bg-secondary/30 border-border/50 focus:border-primary/50 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="h-5">
            {" "}
            {error && (
              <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
                {error}
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full shadow-soft hover:shadow-glow transition-shadow mt-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary hover:underline font-medium"
            >
              Create one
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
