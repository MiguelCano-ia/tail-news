import { Result } from "@/store";
import { NewsCard } from "./NewsCard";

export const RecentNews = ({ recentNews }: { recentNews: Result[] }) => {
  return (
    <>
      {recentNews.map(({ uri, image, title, authors, dateTime }) => (
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
