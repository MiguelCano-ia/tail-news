import { useGetArticlesByCategoryQuery } from "@/store";
import { FeaturedNews } from "./FeaturedNews";
import { RecentNews } from "./RecentNews";
import { TrendingNews } from "./TrendingNews";

export const News = ({ category }: { category: string }) => {
  const { data: articles } = useGetArticlesByCategoryQuery({
    sortBy: "date",
    category: `dmoz/${category}`,
  });

  if (!articles) return;

  return (
    <>
      <div className="flex flex-col gap-5 h-fit mt-2">
        <FeaturedNews mostRecentNews={articles[0]} />
      </div>

      <div className="flex flex-col gap-5 h-fit">
        <div className="font-semibold text-xl">Recent {category} News</div>
        <RecentNews recentNews={articles.slice(1, 7)} />
      </div>

      <div className="lg:col-span-2">
        <div className="font-semibold text-xl mb-5">Trending {category}</div>
        <TrendingNews />
      </div>
    </>
  );
};
