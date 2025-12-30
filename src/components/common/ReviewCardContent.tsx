import { CardContent } from "@/components/ui/card";

interface ReviewCardContentProps {
  excerpt: string;
}

export const ReviewCardContent = ({ excerpt }: ReviewCardContentProps) => {
  return (
    <CardContent className="pb-4 relative min-h-25">
      <div className="text-sm text-muted-foreground line-clamp-3 leading-relaxed ">
        {excerpt}
      </div>
    </CardContent>
  );
};
