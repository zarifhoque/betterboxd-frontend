import { Sparkles } from "lucide-react";

export const HomePageHero = () => {
  return (
    <section className="relative border-b border-border/50">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background pointer-events-none" />
      <div className="relative py-16 md:py-24">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((num) => (
          <div key={num} className={`bokeh bokeh${num}`}></div>
        ))}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in flex-col justify-center">
          <div
            className="
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-[var(--color-card)] text-[var(--color-card-foreground)]
              text-sm font-medium mb-6
            "
          >
            <Sparkles className="h-4 w-4" />
            Discover Cinema
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight text-balance mx-auto w-fit">
            <span className="typing-text">
              Before You Press <span className="gradient-text">Play</span>
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Deep dives into the films that matter. Expert analysis, passionate
            discussion, and a community that celebrates cinema.
          </p>
        </div>
      </div>
    </section>
  );
};
