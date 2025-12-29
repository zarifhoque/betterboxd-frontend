import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, ArrowRight } from "lucide-react";
import type { Story, ReviewCardProps } from "@/types/Story";

export const ReviewCard = ({ story, index = 0 }: ReviewCardProps) => {
  const excerpt =
    story.aiSummary ||
    (story.body.length > 150
      ? story.body.substring(0, 150) + "..."
      : story.body);

  const formatDate = (date: string | Date): string => {
    try {
      const dateObj = typeof date === "string" ? new Date(date) : date;
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
    <Link to={`/story/${story.storyId}`} className="block group">
      <Card
        className="h-full card-hover border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-in-up"
        style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: "backwards",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="pb-3 relative">
          {story.categoryNames.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {story.categoryNames.slice(0, 2).map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="text-xs font-medium bg-accent text-accent-foreground border-0"
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}
          <h3 className="font-display text-xl font-semibold leading-tight line-clamp-2 text-card-foreground group-hover:text-primary transition-colors">
            {story.title}
          </h3>
        </CardHeader>

        <CardContent className="pb-4 relative">
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-0 border-t border-border/50 mt-auto relative">
          <div className="flex items-center gap-4 text-xs text-muted-foreground py-3">
            {story.username && (
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                {story.username}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(story.updatedAt)}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </CardFooter>
      </Card>
    </Link>
  );
};
