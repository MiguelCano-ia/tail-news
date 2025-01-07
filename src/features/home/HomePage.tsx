import { HomePageLayout } from "@/layout/HomePageLayout";
import { RecentNews, RecentNewspaper, TrendingNews } from "./components";

export const HomePage = () => {
  return (
    <HomePageLayout>
      {/* container */}
      <div className="grid grid-cols-1 container m-auto sm:grid-cols-2 gap-x-5 gap-y-20 pt-16">
        {/* Lastest news */}
        <div className="flex flex-col gap-5 h-fit">
          <RecentNewspaper />
        </div>

        {/* Recent news */}
        <div className="flex flex-col gap-5 h-fit">
          <div className="font-medium text-lg">Recent news</div>
          <RecentNews />
        </div>

        {/* Trending */}
        <div className="sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mb-32">
            <TrendingNews />
          </div>
        </div>
        {/* end trending */}
      </div>
    </HomePageLayout>
  );
};
