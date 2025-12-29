import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";

interface Props {
  name: string;
  setName: (val: string) => void;
  username: string;
  setUsername: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  confirmPassword: string;
  setConfirmPassword: (val: string) => void;
  error: string;
}

export const RegistrationFormContent = ({
  name,
  setName,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  error,
}: Props) => (
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Full Name</Label>
      <Input
        id="name"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-secondary/30 border-border/50 focus:border-primary/50"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        placeholder="cinephile123"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-secondary/30 border-border/50 focus:border-primary/50"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-secondary/30 border-border/50 focus:border-primary/50"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-secondary/30 border-border/50 focus:border-primary/50"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="bg-secondary/30 border-border/50 focus:border-primary/50"
      />
    </div>

    {error && (
      <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
        {error}
      </p>
    )}
  </CardContent>
);
