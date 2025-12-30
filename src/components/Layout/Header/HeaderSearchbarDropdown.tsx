import type { StoriesResponse } from "@/types/Story";

interface HeaderSearchbarDropdownProps {
  results: StoriesResponse[];
  showDropdown: boolean;
  onSelect: (storyId: string) => void;
}

export const HeaderSearchbarDropdown = ({
  results,
  showDropdown,
  onSelect,
}: HeaderSearchbarDropdownProps) => {
  if (!showDropdown || results.length === 0) return null;

  return (
    <ul className="absolute w-full bg-background shadow-md rounded-md mt-1 z-50 max-h-64 overflow-y-auto border border-border">
      {results.map((story) => (
        <li
          key={story.storyId}
          className="px-4 py-2 hover:bg-secondary cursor-pointer transition-colors"
          onClick={(e) => {
            // Prevent default to ensure event bubbling doesn't conflict with input blur
            e.preventDefault();
            onSelect(story.storyId);
          }}
        >
          <span className="font-medium">{story.title}</span>{" "}
          <span className="text-muted-foreground text-sm">
            by {story.username}
          </span>
        </li>
      ))}
    </ul>
  );
};
