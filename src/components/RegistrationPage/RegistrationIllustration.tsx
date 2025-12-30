import { Film, CheckCircle2 } from "lucide-react";
import { BrandLogo } from "../common/BrandLogo";

const features = [
  "Write and share movie reviews",
  "Discover new films through the community",
  "Build your critic profile",
];

export const RegistrationIllustration = () => {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center subtle-pattern border-r border-border/50 p-12">
      <div className="max-w-md animate-fade-in text-center">
        <div className="flex justify-center mb-6">
          <BrandLogo size="lg" linkToHome={false} hideTextOnMobile={false} />
        </div>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
          Join the conversation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Create an account to share your thoughts on the latest releases,
          discover hidden gems, and connect with fellow film enthusiasts.
        </p>
        <ul className="space-y-3 flex-col ">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
