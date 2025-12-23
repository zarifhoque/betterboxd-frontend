import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import type { StoryResult } from "@/types/Story";
import { getTopStories } from "@/api/StoryAPI";

export const HeaderSearchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [topResults, setTopResults] = useState<StoryResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [debounceTimer, setDebounceTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(
      `/search?title=${encodeURIComponent(
        searchQuery.trim()
      )}&page=1&itemsPerPage=10`
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(async () => {
      if (!value.trim()) {
        setTopResults([]);
        return;
      }
      try {
        setIsLoading(true);
        // const res = await fetch(
        //   `http://localhost:3000/api/v1/stories?title=${encodeURIComponent(
        //     value
        //   )}&page=1&itemsPerPage=5`
        // );
        const fetchedStories = await getTopStories(value);
        setTopResults(fetchedStories);
      } catch (err) {
        console.error(err);
        setTopResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);
    setDebounceTimer(timer);
  };

  return (
    <div className="relative flex-1 max-w-md mx-auto">
      <form onSubmit={handleSearch}>
        <div className="relative group">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
          <Input
            type="search"
            placeholder="Search reviews, movies, genres..."
            value={searchQuery}
            onChange={handleChange}
            className="pl-10 bg-secondary/50 border-transparent hover:border-border focus:border-primary/50 transition-all"
          />
        </div>
      </form>

      {topResults.length > 0 && (
        <ul className="absolute w-full bg-background shadow-md rounded-md mt-1 z-50 max-h-64 overflow-y-auto">
          {topResults.map((story) => (
            <li
              key={story.storyId}
              className="px-4 py-2 hover:bg-primary/10 cursor-pointer"
              onClick={() => navigate(`/stories/${story.storyId}`)}
            >
              <span className="font-medium">{story.title}</span>{" "}
              <span className="text-muted-foreground text-sm">
                by {story.username}
              </span>
            </li>
          ))}
        </ul>
      )}

      {isLoading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
          Loading...
        </div>
      )}
    </div>
  );
};
