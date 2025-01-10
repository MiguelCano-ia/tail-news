import { NewsCard } from "@/features/home/components/NewsCard/NewsCard";
import { NewsCardSkeleton } from "@/features/home/components/NewsCard/NewsCardSkeleton";
import { PaginationComponent } from "@/shared/components/PaginationComponent";
import { useAppSelector, useGetArticlesByCategoryQuery } from "@/store";
import { useState } from "react";

export const SearchList = ({ search }: { search: string | string[] }) => {
  const { searchCategory } = useAppSelector((state) => state.articles);
  const [page, setPage] = useState(1);

  const {
    data: articles,
    isLoading,
    isFetching,
  } = useGetArticlesByCategoryQuery({
    page,
    keyword: search,
    category: searchCategory,
    sortBy: "date",
    pageCount: 9,
  });

  if (articles?.length === 0)
    return (
      <div className="font-bold text-2xl mt-10 md:mt-20 mb-10 md:mb-0">
        News not found!
      </div>
    );

  const title = searchCategory.split("/")[1];

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <div className="font-bold text-3xl">{title} News</div>
      <div className="px-5 sm:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {isLoading || isFetching
          ? Array.from({ length: 9 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))
          : articles?.map(({ uri, image, title, authors, dateTime }) => (
              <NewsCard
                key={uri}
                uri={uri}
                image={image}
                title={title}
                authors={authors}
                dateTime={dateTime}
              />
            ))}
        <div className="col-span-full flex justify-center mt-5">
          {!isLoading && !isFetching && (
            <PaginationComponent
              page={page}
              numberArticles={articles?.length || 0}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          )}
        </div>
      </div>
    </>
  );
};
