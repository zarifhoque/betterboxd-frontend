import { Badge } from "@/components/ui/badge";
import { CardHeader } from "@/components/ui/card";

interface ReviewCardHeaderProps {
  categoryNames: string[];
  title: string;
  imageUrl: string;
}

export const ReviewCardHeader = ({
  categoryNames,
  title,
  imageUrl,
}: ReviewCardHeaderProps) => {
  return (
    <>
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <CardHeader className="pb-3 relative">
        <div className="flex flex-wrap gap-1.5 mb-3 h-6">
          {categoryNames.slice(0, 2).map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="text-xs font-medium bg-accent text-accent-foreground border-0"
            >
              {category}
            </Badge>
          ))}
        </div>

        <h3 className="card-title">
          {title}
        </h3>
      </CardHeader>
    </>
  );
};
