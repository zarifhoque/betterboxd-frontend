// ReviewCard.tsx
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ReviewCardHeader } from "./ReviewCardHeader";
import { ReviewCardContent } from "./ReviewCardContent";
import { ReviewCardFooter } from "./ReviewCardFooter";
import type { ReviewCardProps } from "@/types/Story";

export const ReviewCard = ({ story, index = 0 }: ReviewCardProps) => {
  const excerpt =
    story.aiSummary ||
    (story.body.length > 150
      ? story.body.substring(0, 150) + "..."
      : story.body);

  // Generate random image from Unsplash
  const imageUrl = `https://picsum.photos/seed/${story.storyId}/600/400`;

  return (
    <Link to={`/stories/${story.storyId}`} className="block group">
      <Card
        className="h-full card-hover border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-in-up"
        style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: "backwards",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <ReviewCardHeader
          categoryNames={story.categoryNames}
          title={story.title}
          imageUrl={imageUrl}
        />

        <ReviewCardContent excerpt={excerpt} />

        <ReviewCardFooter username={story.username} date={story.updatedAt} />
      </Card>
    </Link>
  );
};
