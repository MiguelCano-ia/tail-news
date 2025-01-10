import { useGetArticlesByCategoryQuery } from "@/store";
import {
  TrendingNews,
  FeaturedNews,
  RecentNews,
  FeaturedNewsSkeleton,
  NewsCardSkeleton,
} from "./";

export const News = ({ category }: { category: string }) => {
  const {
    data: articles,
    isLoading,
    isFetching,
  } = useGetArticlesByCategoryQuery({
    sortBy: "date",
    category: `dmoz/${category}`,
  });

  if (!articles) return;

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
          Array.from({ length: 5 }).map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))
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
