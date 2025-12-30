import { BrandLogo } from "../common/BrandLogo";

export default function LoginIllustration() {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center subtle-pattern border-r border-border/50 p-12">
      <div className="max-w-md animate-fade-in text-center">
        <div className="flex justify-center mb-6">
          <BrandLogo size="lg" linkToHome={false} hideTextOnMobile={false} />
        </div>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Welcome back, cinephile
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Sign in to continue exploring thoughtful reviews, share your opinions,
          and connect with fellow movie enthusiasts.
        </p>
      </div>
    </div>
  );
}