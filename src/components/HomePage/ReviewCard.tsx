import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ReviewCard = () => {
  return (
    <Card className="h-full border-border/50 bg-card/80 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex gap-1.5 mb-3">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-7 w-3/4" />
      </CardHeader>
      <CardContent className="pb-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/50 py-3">
        <div className="flex gap-4">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardFooter>
    </Card>
  );
};
