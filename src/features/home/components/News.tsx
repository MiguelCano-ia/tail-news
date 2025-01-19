import { useGetArticlesByCategoryQuery } from "@/store";
import {
  FeaturedNews,
  RecentNews,
  FeaturedNewsSkeleton,
  NewsCardSkeleton,
} from "./";
import { lazy, Suspense } from "react";
import { Loading } from "@/shared/components/Loading";
import { skipToken } from "@reduxjs/toolkit/query";
const TrendingNews = lazy(() => import("../components/TrendingNews"));

export const News = ({ category }: { category: string }) => {
  const { data: articles, isFetching } = useGetArticlesByCategoryQuery(
    category
      ? {
          sortBy: "date",
          category: `dmoz/${category}`,
        }
      : skipToken
  );

  if (!articles)
    return (
      <div className="col-span-2 mb-14">
        <Loading />
      </div>
    );

  return (
    <>
      <div className="flex flex-col gap-5 h-fit mt-2">
        {isFetching ? (
          <FeaturedNewsSkeleton />
        ) : (
          <FeaturedNews mostRecentNews={articles[0]} />
        )}
      </div>

      <div className="flex flex-col gap-5 h-fit">
        {isFetching ? (
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

      <Suspense fallback={<Loading />}>
        <div className="lg:col-span-2">
          <div className="font-semibold text-2xl mb-5">Trending {category}</div>
          <TrendingNews />
        </div>
      </Suspense>
    </>
  );
};
