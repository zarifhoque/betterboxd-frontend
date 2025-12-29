import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

export default function ConfirmEmailPage() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    const confirmEmail = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/v1/auth/confirm-email/${token}`,
          { method: "GET" }
        );

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "Confirmation failed");
        }

        toast.success("Email confirmed", {
          description: "You can now log in to your account.",
        });

        setTimeout(() => navigate("/login"), 2500);
      } catch (err) {
        toast.error("Invalid or expired link", {
          description:
            err instanceof Error ? err.message : "Please request a new link",
        });

        setTimeout(() => navigate("/"), 3000);
      }
    };

    confirmEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-md w-full text-center border-border/50 shadow-soft">
        <CardHeader className="space-y-3">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-muted-foreground" />
          <CardTitle>Confirming your email</CardTitle>
          <CardDescription>
            Please wait while we verify your account.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
