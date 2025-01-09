import { PaginationComponent } from "@/shared/components/PaginationComponent";
import { NewsCard } from "./NewsCard";
import { useAppSelector, useGetArticlesByCategoryQuery } from "@/store";
import { useState } from "react";

export const TrendingNews = () => {
  const [page, setPage] = useState(1);
  const { category } = useAppSelector((state) => state.articles);
  const { data: articles } = useGetArticlesByCategoryQuery({
    page,
    sortBy: "socialScore",
    category: `dmoz/${category}`,
  });

  const prevPage = () => {
    if (!page) return;
    setPage(page - 1);
  };
  const nextPage = () => {
    if (articles && articles?.length < 10) return;
    setPage(page + 1);
  };

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
      <div className="mb-32">
        <PaginationComponent
          page={page}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
};
