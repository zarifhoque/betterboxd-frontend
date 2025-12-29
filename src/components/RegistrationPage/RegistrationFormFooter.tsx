import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  isLoading: boolean;
}

export const RegistrationFormFooter = ({ isLoading }: Props) => (
  <CardFooter className="flex flex-col gap-4 pt-10">
    <Button
      type="submit"
      className="w-full shadow-soft hover:shadow-glow transition-shadow"
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
      <Link to="/login" className="text-primary hover:underline font-medium">
        Log in
      </Link>
    </p>
  </CardFooter>
);
