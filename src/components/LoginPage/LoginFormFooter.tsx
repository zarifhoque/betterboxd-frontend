import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { Link } from "react-router-dom";

export const LoginFormFooter = ({ isLoading }: { isLoading: boolean }) => (
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
      <Link to="/register" className="text-primary hover:underline font-medium">
        Create one
      </Link>
    </p>
  </CardFooter>
);
