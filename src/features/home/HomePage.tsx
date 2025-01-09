import { HomePageLayout } from "@/layout/HomePageLayout";
import { RecentNews, MostRecentNews, TrendingNews } from "./components";
import { useAppSelector, useGetArticlesByCategoryQuery } from "@/store";

export const HomePage = () => {
  const { category } = useAppSelector((state) => state.articles);
  const { data: articles, isLoading } = useGetArticlesByCategoryQuery({
    sortBy: "date",
    category: `dmoz/${category}`,
  });

  if (!articles) return;

  return (
    <>
      {!isLoading ? (
        <HomePageLayout>
          <div className="grid grid-cols-1 container m-auto lg:grid-cols-2 gap-x-5 gap-y-20 pt-16">
            <div className="flex flex-col gap-5 h-fit mt-2">
              <MostRecentNews mostRecentNews={articles[0]} />
            </div>

            <div className="flex flex-col gap-5 h-fit">
              <div className="font-semibold text-xl">
                Recent {category} News
              </div>
              <RecentNews recentNews={articles.slice(1, 7)} />
            </div>

            <div className="lg:col-span-2">
              <div className="font-semibold text-xl mb-5">
                Trending {category}
              </div>
              <TrendingNews />
            </div>
          </div>
        </HomePageLayout>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
