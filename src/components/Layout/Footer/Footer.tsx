import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandLogo } from "../../common/BrandLogo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandLogo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted source for thoughtful movie reviews and cinema
              discourse. Join our community of film enthusiasts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Latest Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/search?q=action"
                  className="hover:text-primary transition-colors"
                >
                  Action Films
                </Link>
              </li>
              <li>
                <Link
                  to="/search?q=drama"
                  className="hover:text-primary transition-colors"
                >
                  Drama
                </Link>
              </li>
              <li>
                <Link
                  to="/search?q=sci-fi"
                  className="hover:text-primary transition-colors"
                >
                  Sci-Fi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Account</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/login"
                  className="hover:text-primary transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-primary transition-colors"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-primary transition-colors"
                >
                  My Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CineCritic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
