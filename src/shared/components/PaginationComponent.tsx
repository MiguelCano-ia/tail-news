import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  page: number;
  pageCount: number;
  numberArticles: number;
  prevPage: () => void;
  nextPage: () => void;
}

export const PaginationComponent = ({
  page,
  pageCount,
  numberArticles,
  prevPage,
  nextPage,
}: PaginationProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              page === 1 ? "pointer-events-none opacity-50" : undefined
            }
            onClick={prevPage}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={
              numberArticles < pageCount
                ? "pointer-events-none opacity-50"
                : undefined
            }
            onClick={nextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
