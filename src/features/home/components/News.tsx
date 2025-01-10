import { useGetArticlesByCategoryQuery } from "@/store";
import {
  TrendingNews,
  FeaturedNews,
  RecentNews,
  FeaturedNewsSkeleton,
  NewsCardSkeleton,
} from "./";
import { skipToken } from "@reduxjs/toolkit/query";
import { CheckingArticles } from "@/shared/components/CheckingArticles";

export const News = ({ category }: { category: string }) => {
  const {
    data: articles,
    isLoading,
    isFetching,
  } = useGetArticlesByCategoryQuery(
    category
      ? {
          sortBy: "date",
          category: `dmoz/${category}`,
        }
      : skipToken
  );

  if (!articles) return <CheckingArticles />;

  return (
    <>
      <div className="flex flex-col gap-5 h-fit mt-2">
        {isFetching || isLoading ? (
          <FeaturedNewsSkeleton />
        ) : (
          <FeaturedNews mostRecentNews={articles[0]} />
        )}
      </div>

      <div className="flex flex-col gap-5 h-fit">
        {isFetching || isLoading ? (
          <div className="flex flex-col gap-5 h-fit mt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="font-semibold text-2xl">Recent {category} News</div>
            <RecentNews recentNews={articles.slice(1)} />
          </>
        )}
      </div>

      <div className="lg:col-span-2">
        <div className="font-semibold text-2xl mb-5">Trending {category}</div>
        <TrendingNews />
      </div>
    </>
  );
};
