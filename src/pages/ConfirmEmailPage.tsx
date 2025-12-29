import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";
import { confirmEmailApi } from "@/api/AuthAPI";

type Status = "loading" | "success" | "error";

export default function ConfirmEmailPage() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState(
    "Please wait while we verify your account."
  );

  useEffect(() => {
    if (!token) return;

    const confirmEmail = async () => {
      try {
        await confirmEmailApi(token);

        setStatus("success");
        setMessage(
          "Your email has been successfully confirmed! You can now log in."
        );

        toast.success("Email confirmed", {
          description: "You can now log in to your account.",
        });

        setTimeout(() => navigate("/login"), 2500);
      } catch (err) {
        setStatus("error");
        setMessage(
          err instanceof Error
            ? err.message
            : "Invalid or expired link. Please request a new confirmation email."
        );

        toast.error("Invalid or expired link", {
          description:
            err instanceof Error ? err.message : "Please request a new link",
        });

        setTimeout(() => navigate("/"), 4000);
      }
    };

    confirmEmail();
  }, [token, navigate]);

  const renderIcon = () => {
    switch (status) {
      case "loading":
        return (
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
        );
      case "success":
        return (
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 animate-bounce" />
        );
      case "error":
        return (
          <XCircle className="mx-auto h-12 w-12 text-red-500 animate-bounce" />
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Card className="max-w-md w-full text-center border-border/50 shadow-2xl p-8 animate-fade-in">
        <CardHeader className="space-y-4">
          {renderIcon()}
          <CardTitle className="text-2xl font-semibold">
            {status === "loading"
              ? "Confirming your email..."
              : status === "success"
              ? "Email Confirmed!"
              : "Confirmation Failed"}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            {message}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
