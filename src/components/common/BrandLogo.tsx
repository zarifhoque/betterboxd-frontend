import { Film, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg";
  hideTextOnMobile?: boolean;
  linkToHome?: boolean;
  className?: string;
}

export const BrandLogo = ({
  size = "md",
  hideTextOnMobile = true,
  linkToHome = true,
  className = "",
}: LogoProps) => {
  const iconSizeClass =
    size === "xs"
      ? "h-4 w-4"
      : size === "sm"
      ? "h-5 w-5"
      : size === "lg"
      ? "h-9 w-9"
      : "h-7 w-7";
  const sparkSizeClass =
    size === "xs"
      ? "h-1.5 w-1.5"
      : size === "sm"
      ? "h-2 w-2"
      : size === "lg"
      ? "h-4 w-4"
      : "h-3 w-3";
  const textSizeClass =
    size === "xs"
      ? "text-base"
      : size === "sm"
      ? "text-lg"
      : size === "lg"
      ? "text-2xl"
      : "text-xl";

  const content = (
    <>
      <div className="relative">
        <Film
          className={`${iconSizeClass} text-primary transition-transform ${
            linkToHome ? "group-hover:scale-110" : ""
          }`}
        />
        <Sparkles
          className={`${sparkSizeClass} text-primary/60 absolute -top-1 -right-1 animate-float`}
        />
      </div>
      <span
        className={`${
          hideTextOnMobile ? "hidden sm:inline" : ""
        } tracking-tight ${textSizeClass}`}
      >
        Better<span className="text-primary">Boxd</span>
      </span>
    </>
  );

  if (linkToHome) {
    return (
      <Link
        to="/home"
        className={`flex items-center gap-2.5 font-display font-semibold text-foreground group ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`flex items-center gap-2.5 font-display font-semibold text-foreground ${className}`}
    >
      {content}
    </div>
  );
};
