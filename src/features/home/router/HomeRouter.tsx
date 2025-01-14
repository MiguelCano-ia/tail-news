import { ArticleLayout } from "@/layout/ArticleLayout";
import { HomePage } from "../";
import { Navigate, Route, Routes } from "react-router";
import { ArticlePage } from "@/features/article-details";
import { SearchPage } from "@/features/search";

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

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
