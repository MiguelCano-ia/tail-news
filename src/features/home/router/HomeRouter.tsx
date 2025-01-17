import { ArticleLayout } from "@/layout/ArticleLayout";
import {
  ArticlePage,
  FavoriteArticlesPage,
  HomePage,
  SearchPage,
} from "../../";
import { Navigate, Route, Routes } from "react-router";

export const HomeRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path=":category" element={<HomePage />} />
        </Route>

        <Route path="article-details" element={<ArticleLayout />}>
          <Route path=":articleUri" element={<ArticlePage />} />
        </Route>

        <Route path="search" element={<SearchPage />} />

        <Route path="favorite-articles" element={<ArticleLayout />}>
          <Route path="" element={<FavoriteArticlesPage />} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
