import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReviewCard } from "@/components/common/ReviewCard";
import { Film } from "lucide-react";
import { getStoriesCount, getTopStories } from "@/api/StoryAPI";
import type { StoriesResponse } from "@/types/Story";
import { Pagination } from "../common/Pagination";
import { Dropdown, ItemsPerPageSelector } from "../common/Dropdown";

export const HomePageLatestReviews = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const { data, isLoading, error } = useQuery<StoriesResponse>({
    queryKey: ["stories", page, itemsPerPage],
    queryFn: async () => {
      const result = await getTopStories(page, itemsPerPage);
      return result;
    },
  });

  const { data: countData } = useQuery({
    queryKey: ["stories-count"],
    queryFn: getStoriesCount,
  });

  const stories = data?.data || [];
  const storyCount = stories.length;
  const totalPages = Math.ceil((countData?.data?.count || 0) / itemsPerPage);

  const handleItemsPerPageChange = (newCount: number) => {
    setItemsPerPage(newCount);
    setPage(1);
  };

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-8 ">
        <div className="flex items-center gap-2">
          <Film className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-semibold text-foreground">
            Latest Reviews
          </h2>
        </div>
        {!isLoading && storyCount > 0 && (
          <span className="text-sm text-muted-foreground">
            {storyCount} {storyCount === 1 ? "review" : "reviews"}
          </span>
        )}
      </div>
      <div className="flex justify-end pb-1">
        <Dropdown
          options={[1, 3, 6, 9, 12]}
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        />
      </div>

      {isLoading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-border/50 bg-card/80 overflow-hidden rounded-lg p-6 animate-pulse"
            >
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-20 bg-muted rounded"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-16">
          <Film className="h-16 w-16 text-destructive/50 mx-auto mb-4" />
          <p className="text-destructive">
            Failed to load reviews. Please try again later.
          </p>
        </div>
      )}

      {!isLoading && !error && stories.length === 0 && (
        <div className="text-center py-16">
          <Film className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
          <p className="text-muted-foreground">
            No reviews yet. Be the first to write one!
          </p>
        </div>
      )}

      {!isLoading && !error && stories.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <ReviewCard key={story.storyId} story={story} index={index} />
          ))}
        </div>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
};
