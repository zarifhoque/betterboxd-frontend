import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationArrowProps {
  paginationDirection: "left" | "right";
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationArrow = ({
  paginationDirection,
  currentPage,
  totalPages,
  onPageChange,
}: PaginationArrowProps) => {
  const isLeft = paginationDirection === "left";

  const handleClick = () => {
    if (isLeft) {
      onPageChange(currentPage - 1);
    } else {
      onPageChange(currentPage + 1);
    }
  };

  const disabled = isLeft ? currentPage <= 1 : currentPage >= totalPages;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      disabled={disabled}
      className="gap-1 hover:bg-accent hover:border-accent transition-colors"
    >
      {isLeft && <ChevronLeft className="h-4 w-4" />}
      {isLeft ? "Previous" : "Next"}
      {!isLeft && <ChevronRight className="h-4 w-4" />}
    </Button>
  );
};
