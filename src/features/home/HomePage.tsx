import { HomePageLayout } from "@/layout/HomePageLayout";
import { RecentNews, RecentNewspaper, TrendingNews } from "./components";
import { useAppSelector, useGetArticlesByCategoryQuery } from "@/store";

export const HomePage = () => {
  const { category } = useAppSelector((state) => state.articles);
  const { isLoading } = useGetArticlesByCategoryQuery({
    category,
  });

  return (
    <>
      {!isLoading ? (
        <HomePageLayout>
          <div className="grid grid-cols-1 container m-auto md:grid-cols-2 gap-x-5 gap-y-20 pt-16">
            <div className="flex flex-col gap-5 h-fit">
              <RecentNewspaper />
            </div>

            <div className="flex flex-col gap-5 h-fit">
              <div className="font-medium text-lg">
                Recent {category.toLowerCase()} news
              </div>
              <RecentNews />
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mb-32">
                <TrendingNews />
              </div>
            </div>
          </div>
        </HomePageLayout>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
