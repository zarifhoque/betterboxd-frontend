import { Film, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  hideTextOnMobile?: boolean;
  className?: string;
}

export const BrandLogo = ({
  size = "md",
  hideTextOnMobile = true,
  className = "",
}: LogoProps) => {
  const iconSizeClass =
    size === "sm" ? "h-5 w-5" : size === "lg" ? "h-9 w-9" : "h-7 w-7";
  const sparkSizeClass =
    size === "sm" ? "h-2 w-2" : size === "lg" ? "h-4 w-4" : "h-3 w-3";

  return (
    <Link
      to="/home"
      className={`flex items-center gap-2.5 font-display text-xl font-semibold text-foreground group ${className}`}
    >
      <div className="relative">
        <Film
          className={`${iconSizeClass} text-primary transition-transform group-hover:scale-110`}
        />
        <Sparkles
          className={`${sparkSizeClass} text-primary/60 absolute -top-1 -right-1 animate-float`}
        />
      </div>
      <span
        className={`${
          hideTextOnMobile ? "hidden sm:inline" : ""
        } tracking-tight`}
      >
        Better<span className="text-primary">Boxd</span>
      </span>
    </Link>
  );
};
