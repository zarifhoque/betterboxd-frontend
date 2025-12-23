import { Link } from "react-router-dom";
import { Film, User, LogOut, PlusCircle, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/contexts/auth/UseAuth";
import { BrandLogo } from "../../common/BrandLogo";
import { HeaderSearchbar } from "./HeaderSearchbar";
import { HeaderProfileDropdown } from "./HeaderProfileDropdown";

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass-effect">
      <div className="container flex h-16 items-center gap-4 ">
        <BrandLogo />
        <HeaderSearchbar />

        <nav className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Button
                variant="default"
                size="sm"
                asChild
                className="shadow-soft hover:shadow-glow transition-shadow"
              >
                <Link to="/create">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Write Review</span>
                </Link>
              </Button>
              <HeaderProfileDropdown />
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-foreground"
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="shadow-soft hover:shadow-glow transition-shadow"
              >
                <Link to="/register">Get Started</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
