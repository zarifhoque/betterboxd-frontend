import { Label } from "@radix-ui/react-label";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export const LoginFormContent = ({ 
  email, setEmail, password, setPassword, error, showPassword, setShowPassword 
}: any) => (
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
        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
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
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
    </div>

    <div className="h-5">
      {error && (
        <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  </CardContent>
);