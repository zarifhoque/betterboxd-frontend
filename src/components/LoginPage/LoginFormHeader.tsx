import { Film } from "lucide-react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

export const LoginFormHeader = () => {
  return (
    <CardHeader className="text-center pb-2">
      <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
        <Film className="h-8 w-8 text-secondary" />
      </div>
      <CardTitle className="font-display text-2xl">Sign In</CardTitle>
      <CardDescription>Enter your credentials to continue</CardDescription>
    </CardHeader>
  );
};
