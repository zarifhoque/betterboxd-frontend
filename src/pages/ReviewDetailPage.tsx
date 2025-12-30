import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStoryById } from "@/api/StoryAPI"; // Import the new API function
import { Layout } from "@/components/Layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, User, Share2, Bookmark } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "@/contexts/auth/UseAuth";
import type { StoriesResponse, Story } from "@/types/Story";

export default function ReviewDetailPage() {
  const { storyId } = useParams<{ storyId: string }>();
  // console.log(res);
  const { token } = useAuth();
  const {
    data: review,
    isLoading,
    isError,
  } = useQuery<Story>({
    queryKey: ["story", storyId, token],
    queryFn: () => getStoryById(storyId!, token),
  });

  return (
    <Layout>
      <article className="min-h-screen">
        <div className="relative border-b border-border/50 subtle-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          <div className="container relative py-12 max-w-4xl">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <Link to="/home">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Reviews
              </Link>
            </Button>

            {isLoading && (
              <div className="space-y-4 animate-pulse">
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-3/4" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-36" />
                </div>
              </div>
            )}

            {review && (
              <header className="animate-fade-in">
                {/* Categories */}
                {review.categoryNames && review.categoryNames.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {review.categoryNames.map((catName, index) => (
                      <Link
                        key={index}
                        to={`/search?q=${encodeURIComponent(catName)}`}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-accent text-accent-foreground border-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {catName}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                  {review.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                      <User className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {review.username || "Anonymous"}
                      </p>
                      <p className="text-xs">Author</p>
                    </div>
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(review.updatedAt || new Date()), "MMMM d, yyyy")}
                  </span>
                </div>
              </header>
            )}
          </div>
        </div>

        {/* Content */}
        {review && (
          <div
            className="container py-12 max-w-4xl animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            <div className="flex gap-8">
              {/* Article Body */}
              <div className="flex-1">
                <div
                  className="prose prose-lg max-w-none text-foreground prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: review.body }}
                />
              </div>

              {/* Sidebar Actions */}
              <aside className="hidden lg:block w-16">
                <div className="sticky top-24 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 hover:bg-accent hover:border-accent"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 hover:bg-accent hover:border-accent"
                  >
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        )}

        {/* Error / Not Found State */}
        {(isError || (!isLoading && !review)) && (
          <div className="container py-24 text-center">
            <p className="text-destructive text-lg">Review not found.</p>
            <Button asChild className="mt-4">
              <Link to="/home">Back to Home</Link>
            </Button>
          </div>
        )}
      </article>
    </Layout>
  );
}
