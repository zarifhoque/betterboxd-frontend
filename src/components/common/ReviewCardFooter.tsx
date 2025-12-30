import { CardFooter } from "@/components/ui/card";
import { User, Calendar, ArrowRight } from "lucide-react";

interface ReviewCardFooterProps {
  username?: string;
  date: string;
}

export const ReviewCardFooter = ({ username, date }: ReviewCardFooterProps) => {
  const formatDate = (date: string): string => {
    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) return "Date unavailable";

      return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Date unavailable";
    }
  };

  return (
    <CardFooter className="flex items-center justify-between border-t border-border/50 mt-auto relative">
      <div className="flex items-center gap-4 text-xs text-muted-foreground py-3">
        {username && (
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {username}
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(date)}
        </span>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </CardFooter>
  );
};
