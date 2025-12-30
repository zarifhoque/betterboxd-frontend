export const getPaginationPages = (currentPage: number, totalPages: number) => {
  const pages: (number | "ellipsis-start" | "ellipsis-end")[] = [];

  // Show ellipsis at the start if current page is > 2
  if (currentPage > 2) {
    pages.push("ellipsis-start");
  }

  // Show current page
  pages.push(currentPage);

  // Show next page if it exists and isn't the last page
  if (currentPage + 1 < totalPages) {
    pages.push(currentPage + 1);
  }

  // Show ellipsis before last page if there's a gap
  if (currentPage + 1 < totalPages - 1) {
    pages.push("ellipsis-end");
  }

  // Show last page if it's not already shown
  if (currentPage < totalPages) {
    pages.push(totalPages);
  }

  return pages;
};