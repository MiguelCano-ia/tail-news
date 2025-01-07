import { useAppSelector } from "@/store";
import { NewsCard } from "./NewsCard";

export const RecentNews = () => {
  const { results } = useAppSelector((state) => state.articles);

  return (
    <>
      {results.map((article) => (
        <NewsCard key={article.uri} {...article} />
      ))}
    </>
  );
};
