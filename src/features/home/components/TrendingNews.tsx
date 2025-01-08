import { NewsCard } from "./NewsCard";
import { useAppSelector, useGetArticlesByCategoryQuery } from "@/store";

export const TrendingNews = () => {
  const { category } = useAppSelector((state) => state.articles);
  const { data: articles } = useGetArticlesByCategoryQuery({
    sortBy: "socialScore",
    category,
  });

  return (
    <>
      {articles?.map(({ uri, title, dateTime, authors, image }) => (
        <NewsCard
          key={uri}
          image={image}
          title={title}
          authors={authors}
          dateTime={dateTime}
        />
      ))}
    </>
  );
};
