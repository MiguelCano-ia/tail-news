import { NewsCard, NewsCardSkeleton } from "@/features/home/components";
import { useGetArticlesByCategoryQuery } from "@/store";

export const RelatedArticles = ({
  uri,
  keyword,
}: {
  keyword: string | string[];
  uri: string;
}) => {
  const { data: relatedArticles, isFetching } = useGetArticlesByCategoryQuery({
    sortBy: "socialScore",
    pageCount: 5,
    keyword,
  });

  if (isFetching)
    return Array.from({ length: 5 }, (_, index) => (
      <NewsCardSkeleton key={index} />
    ));

  const articles = relatedArticles?.filter((article) => article.uri !== uri);

  return (
    <>
      <div className="text-xl font-semibold leading-none">
        Related articles {`(${articles?.length})`}
      </div>
      {articles?.map(({ uri, title, image, dateTime, authors }) => (
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
