import { Film } from "lucide-react";

export default function LoginIllustration() {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center subtle-pattern border-r border-border/50 p-12 ">
      <div className="max-w-md animate-fade-in flex-1 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-8 pl-0 bg">
          <Film className="h-10 w-10 text-primary" />
          <span className="font-display text-3xl font-bold">
            Better<span className="text-primary">Boxd</span>
          </span>
        </div>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4 ">
          Welcome back, cinephile
        </h2>
        <div className="text-muted-foreground leading-relaxed text-left p-0">
          Sign in to continue exploring thoughtful reviews, share your opinions,
          and connect with fellow movie enthusiasts.
        </div>
      </div>
    </div>
  );
}
