import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const HeaderSearchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [topResults, setTopResults] = useState<StoryResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(
      `/search?title=${encodeURIComponent(
        searchQuery.trim()
      )}&page=1&itemsPerPage=10`
    );
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-md mx-auto">
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
  );
};
