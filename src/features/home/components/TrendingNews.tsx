import { NewsCard } from "./NewsCard/NewsCard";
import { NewsCardSkeleton } from "./NewsCard";
import { PaginationComponent } from "@/shared/components/PaginationComponent";
import { useAppSelector, useGetArticlesByCategoryQuery } from "@/store";
import { useState } from "react";

const TrendingNews = () => {
  const [page, setPage] = useState(1);
  const { category } = useAppSelector((state) => state.articles);
  const { data: articles, isFetching } = useGetArticlesByCategoryQuery({
    page,
    sortBy: "socialScore",
    category: `dmoz/${category}`,
  });

  const prevPage = () => {
    if (!page) return;
    setPage(page - 1);
  };
  const nextPage = () => {
    if (articles?.length === 0) return;
    setPage(page + 1);
  };

  if (isFetching) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-64">
        {Array.from({ length: 6 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-16">
        {articles?.map(({ uri, title, dateTime, authors, image }) => (
          <NewsCard
            key={uri}
            uri={uri}
            image={image}
            title={title}
            authors={authors}
            dateTime={dateTime}
          />
        ))}
      </div>
      <div className="mb-28">
        <PaginationComponent
          page={page}
          pageCount={6}
          numberArticles={articles?.length || 0}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
};

export default TrendingNews;
