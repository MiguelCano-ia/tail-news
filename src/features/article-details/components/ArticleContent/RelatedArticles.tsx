import { NewsCard, NewsCardSkeleton } from "@/features/home/components";
import { useGetArticlesByCategoryQuery } from "@/store";

export const RelatedArticles = ({
  keyword,
}: {
  keyword: string | string[];
}) => {
  const {
    data: relatedArticles,
    isLoading,
    isFetching,
  } = useGetArticlesByCategoryQuery({
    sortBy: "socialScore",
    pageCount: 5,
    keyword,
  });

  return (
    <>
      {isFetching || isLoading ? (
        Array.from({ length: 5 }, (_, index) => (
          <NewsCardSkeleton key={index} />
        ))
      ) : (
        <>
          <div className="text-xl font-semibold leading-none">
            Related articles
          </div>
          {relatedArticles?.map(({ uri, title, image, dateTime, authors }) => (
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
      )}
    </>
  );
};
