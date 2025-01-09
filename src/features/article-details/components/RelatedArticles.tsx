import { NewsCard } from "@/features/home/components/NewsCard";
import { useGetArticlesByCategoryQuery } from "@/store";

export const RelatedArticles = ({
  keyword,
}: {
  keyword: string | string[];
}) => {
  const { data: relatedArticles } = useGetArticlesByCategoryQuery({
    sortBy: "socialScore",
    pageCount: 5,
    keyword,
  });

  if (!relatedArticles) return;

  return (
    <>
      {relatedArticles.map(({ uri, title, image, dateTime, authors }) => (
        <NewsCard
          key={uri}
          uri={uri}
          title={title}
          image={image}
          dateTime={dateTime}
          authors={authors}
        />
      ))}
    </>
  );
};
