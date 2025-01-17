import { useAppSelector, useGetFavoriteArticlesQuery } from "@/store";
import { NewsCard, NewsCardSkeleton } from "../home/components";
import { NoFavoriteArticles } from "./components/NoFavoriteArticles";
import { skipToken } from "@reduxjs/toolkit/query";

export const FavoriteArticlesPage = () => {
  const { favoriteArticles } = useAppSelector((state) => state.articles);
  const {
    data: articles,
    isLoading,
    isFetching,
  } = useGetFavoriteArticlesQuery(
    favoriteArticles.length > 0
      ? {
          articleUri: favoriteArticles,
        }
      : skipToken
  );

  if (isLoading || isFetching) {
    return (
      <div className="container m-auto grid grid-cols-1 gap-5 md:grid-cols-2 px-10 lg:px-20 mb-10  mt-10 md:mt-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!articles) return <NoFavoriteArticles />;

  return (
    <>
      <div className="container m-auto flex flex-col items-center">
        <div className="text-3xl font-bold mb-10 text-center mt-10">
          My Favorite Articles
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-10 lg:px-20 mb-10">
          {articles.map(({ uri, title, image, dateTime, authors }) => (
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
