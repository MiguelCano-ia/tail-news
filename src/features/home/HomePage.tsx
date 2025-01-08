import { HomePageLayout } from "@/layout/HomePageLayout";
import { RecentNews, RecentNewspaper, TrendingNews } from "./components";
import {
  setNews,
  useAppDispatch,
  useAppSelector,
  useGetArticlesByCategoryQuery,
} from "@/store";
import { useEffect } from "react";

export const HomePage = () => {
  const { category } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();
  const { data: articles, isLoading } = useGetArticlesByCategoryQuery({
    sortBy: "date",
    category,
  });

  useEffect(() => {
    if (!articles) return;
    dispatch(setNews(articles));
  }, [category, articles]);

  return (
    <>
      {!isLoading ? (
        <HomePageLayout>
          <div className="grid grid-cols-1 container m-auto md:grid-cols-2 gap-x-5 gap-y-20 pt-16">
            <div className="flex flex-col gap-5 h-fit mt-2">
              <RecentNewspaper />
            </div>

            <div className="flex flex-col gap-5 h-fit">
              <div className="font-semibold text-xl">
                Recent {category} News
              </div>
              <RecentNews />
            </div>

            <div className="md:col-span-2">
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
