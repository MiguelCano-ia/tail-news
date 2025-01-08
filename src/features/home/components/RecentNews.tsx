import { useAppSelector } from "@/store";
import { NewsCard } from "./NewsCard";

export const RecentNews = () => {
  const { results } = useAppSelector((state) => state.articles);

  return (
    <>
      {results.map(({ uri, image, title, authors, dateTime }) => (
        <NewsCard
          key={uri}
          uri={uri}
          image={image}
          title={title}
          authors={authors}
          dateTime={dateTime}
        />
      ))}
    </>
  );
};
