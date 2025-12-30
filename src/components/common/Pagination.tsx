import { Button } from "@/components/ui/button";
import { PaginationArrow } from "./PaginationArrow";
import { getPaginationPages } from "@/utils/PaginationUtils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-3 mt-12">
      <PaginationArrow
        paginationDirection="left"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <span key={page} className="px-2 text-muted-foreground">
                ...
              </span>
            );
          }

          return (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "ghost"}
              size="icon"
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 ${page === currentPage ? "shadow-soft" : ""}`}
            >
              {page}
            </Button>
          );
        })}
      </div>
      <PaginationArrow
        paginationDirection="right"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
