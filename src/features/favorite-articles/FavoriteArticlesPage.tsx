import { NewsCard, NewsCardSkeleton } from "../home/components";
import { NoFavoriteArticles } from "./components/NoFavoriteArticles";
import { skipToken } from "@reduxjs/toolkit/query";
import { useAppSelector, useGetFavoriteArticlesQuery } from "@/store";

const FavoriteArticlesPage = () => {
  const { favoriteArticles } = useAppSelector((state) => state.articles);
  const { data: articles, isFetching } = useGetFavoriteArticlesQuery(
    favoriteArticles.length > 0
      ? {
          articleUri: favoriteArticles,
        }
      : skipToken
  );

  if (isFetching) {
    return (
      <div className="container m-auto grid grid-cols-1 gap-5 md:grid-cols-2 px-10 lg:px-20 mb-10  mt-10 md:mt-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!articles) return <NoFavoriteArticles />;

  const exitsArticles = articles.filter((arcicle) => arcicle !== undefined);

  return (
    <>
      <div className="container m-auto flex flex-col items-center">
        <div className="mb-10 mt-10">
          <div className="text-3xl font-bold text-center">
            My Favorite Articles
          </div>
          <small>
            Some items may not appear because they were removed some time later.
          </small>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-10 lg:px-20 mb-20">
          {exitsArticles.map(({ uri, title, image, dateTime, authors }) => (
            <NewsCard
              key={uri}
              uri={uri}
              title={title}
              image={image}
              dateTime={dateTime}
              authors={authors}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoriteArticlesPage;
