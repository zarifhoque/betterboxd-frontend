import { Film } from "lucide-react";

const LatestReviewsSection = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const { data, isLoading } = useQuery<StoriesResponse>({
    queryKey: ["latestReviews", page],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/api/v1/stories/?page=${page}&itemsPerPage=${itemsPerPage}&title=name`
      );
      if (!res.ok) throw new Error("Failed to fetch reviews");
      return res.json();
    },
    keepPreviousData: true,
  });

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Film className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-semibold text-foreground">
            Latest Reviews
          </h2>
        </div>
        <span className="text-sm text-muted-foreground">
          {data?.total || 0} reviews
        </span>
      </div>

      {isLoading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: itemsPerPage }).map((_, i) => (
            <ReviewCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && data && data.data.length === 0 && (
        <div className="text-center py-16">
          <Film className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
          <p className="text-muted-foreground">
            No reviews yet. Be the first to write one!
          </p>
        </div>
      )}

      {!isLoading && data && data.data.length > 0 && (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.data.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>

          <Pagination
            currentPage={page}
            totalPages={data.totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </section>
  );
};
