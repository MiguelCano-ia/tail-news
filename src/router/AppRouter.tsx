import { ArticlePage, HomePage, SearchPage } from "@/features";
import { Navigate, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path=":category" element={<HomePage />} />
        </Route>
        <Route path="article-details" element={<ArticlePage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
