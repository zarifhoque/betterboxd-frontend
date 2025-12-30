import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { searchStories } from "@/api/StoryAPI";
import type { StoriesResponse } from "@/types/Story";
// Import the new component
import { HeaderSearchbarDropdown } from "./HeaderSearchbarDropdown";

export const HeaderSearchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [topResults, setTopResults] = useState<StoriesResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const [debounceTimer, setDebounceTimer] = useState<
    NodeJS.Timeout | number | null
  >(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setShowDropdown(false);
    navigate(
      `/search?title=${encodeURIComponent(
        searchQuery.trim()
      )}&page=1&itemsPerPage=10`
    );
  };

  const handleSelectStory = (storyId: string) => {
    navigate(`/stories/${storyId}`);
    setShowDropdown(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length === 0) setShowDropdown(false);
    if (debounceTimer) clearTimeout(debounceTimer as number);

    const timer = setTimeout(async () => {
      if (!value.trim()) {
        setTopResults([]);
        return;
      }
      try {
        setIsLoading(true);
        const fetchedStories = await searchStories(value);
        setTopResults(fetchedStories);
        setShowDropdown(fetchedStories.length > 0);
      } catch (err) {
        console.error(err);
        setTopResults([]);
        setShowDropdown(false);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    setDebounceTimer(timer);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 100);
  };

  const handleFocus = () => {
    if (topResults.length > 0) {
      setShowDropdown(true);
    }
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
            className="pl-10 bg-secondary/50 border-transparent hover:border-border focus:border-primary/50 transition-all"
          />
        </div>
      </form>

      <HeaderSearchbarDropdown
        results={topResults}
        showDropdown={showDropdown}
        onSelect={handleSelectStory}
      />

      {isLoading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
          <Loader2 />
        </div>
      )}
    </div>
  );
};
